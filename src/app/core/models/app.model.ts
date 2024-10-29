export interface EnumConstantInterface {
  [key: string]: EnumOption;
}

export class EnumOption {
  title = "-";
  cssClass?: string;
  textCss?: string;
}
