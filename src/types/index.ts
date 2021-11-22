export type CustomElement = { type: string; children: CustomText[] };
export interface CustomText extends Record<string, any> {
  text: string;
  bold?: true;
  italic?: true;
  underline?: true;
  striketrough?: true;
  type?: string;
}
