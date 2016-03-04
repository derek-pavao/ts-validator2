import {EmailValidator} from "../validators/email-validator";
import {validatorFactory} from "../utils/validator-factory";
import {IEmailConfig} from "../interfaces/i-email-config";


export let Email = function (config: IEmailConfig) {
    return validatorFactory(new EmailValidator(config));
};
