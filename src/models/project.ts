export default interface Project {
  id: number;
  name: string;
  description: string;
  image: string;
  imageAlt: string;
  tags: string[];
  projectInfo(): JSX.Element;
}
