export default interface Project {
  id: number;
  name: string;
  image: string;
  imageBig: string;
  imageAlt: string;
  tags: string[];
  container(): JSX.Element;
}
