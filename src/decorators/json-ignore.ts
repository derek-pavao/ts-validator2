 export let JsonIgnore = function () {
    console.log('go go go');
    return function (target: any, name: string) {
        console.log('do it');
        target._ignoreProperties = target._ignoreProperties || {};

        target._ignoreProperties[name] = true;
    };
 };
