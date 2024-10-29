import { EnumConstantInterface, EnumOption } from "../models/app.model";

export enum UserStatus {
  Active = 0,
  Inactive = 1,
  Blocked = 2,
}

export const USER_STATUS_OPTIONS: EnumConstantInterface = {
  [UserStatus.Active]: {
    title: "Active",
    cssClass: "",
    textCss: "",
  },
  [UserStatus.Inactive]: {
    title: "Inactive",
    cssClass: "",
    textCss: "",
  },
  [UserStatus.Blocked]: {
    title: "Blocked",
    cssClass: "",
    textCss: "",
  },
};

export function getUserStatusOptions(option: UserStatus): EnumOption {
  return USER_STATUS_OPTIONS[option] || new EnumOption();
}
