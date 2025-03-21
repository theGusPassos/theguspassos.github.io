export default interface Project {
  id: string;
  order: number;
  name: string;
  type: string;
  publicDir: string;
  capsuleAlt: string;
  pitch?: string;
  description: string;
  platforms: Platform[];
  creators: Creator[];
  externalLinks: ExternalLinks;
}

export interface Platform {
  name: string;
  icon: string;
  link: string;
}

export interface Creator {
  name: string;
  role: string;
  socials: string;
  photo?: string;
} 

export interface ExternalLinks {
  trailer?: string;
  gameplay?: string;
  hasPressKit: boolean;
  basicExternal?: string;
  basicExternalName?: string;
}
