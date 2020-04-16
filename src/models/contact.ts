export default interface Contact {
  image: string;
  altImage: string;
  message: string;
  contactText: string;
  url?: string;
  action?(): void;
}
