export let JsonIgnore = function () {

    return function (target: any, name: string) {
        target._ignoreProperties = target._ignoreProperties || {};

        target._ignoreProperties[name] = true;
    };
};
