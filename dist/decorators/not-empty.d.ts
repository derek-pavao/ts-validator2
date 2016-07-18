/**
 * identifies the property it decorates as not allowed to be empty, essentially required.
 * "empty" is defined as undefined, null, {}, [], '', ' ';
 *
 * @param errorMessage the message to display if the validation fails
 * @returns {function(Object, string): undefined}
 */
export declare let NotEmpty: (errorMessage?: any) => (target: any, name: string) => void;
