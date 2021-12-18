export interface Message {
  text(): string;
  reply(text: string): void;
}
