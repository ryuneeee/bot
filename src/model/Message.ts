export interface Message {
  text(): string;
  reply(templateType: string, data: Object): void;
}
