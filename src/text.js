// import {Text,TextInput,Platform} from 'react-native';
//解决rn ios字体较大的问题
export const opoFontFix = () => {
    const oldTextRender = Text.render;
    Text.render = function(...args) {
        const origin = oldTextRender.call(this, ...args);
        if (Platform.OS === "android") {
            return React.cloneElement(origin, {
                allowFontScaling: false,//解决字体分辨率大小跟随系统设置变化
                style: [{ fontFamily: "Roboto" }, origin.props.style], //解决字体风格跟随系统设置变化
            });
        } else {
            return React.cloneElement(origin, {
                allowFontScaling: false,
                style: [origin.props.style],
            });
        }
    };
    const oldTextInputRender = TextInput.render;
    TextInput.render = function(...args) {
        const origin = oldTextInputRender.call(this, ...args);
        if (Platform.OS === "android") {
            return React.cloneElement(origin, {
                allowFontScaling: false,//解决字体分辨率大小跟随系统设置变化
                style: [{ fontFamily: "Roboto" }, origin.props.style],//解决字体风格跟随系统设置变化
            });
        } else {
            return React.cloneElement(origin, {
                allowFontScaling: false,
                style: [origin.props.style],
            });
        }
    };
}