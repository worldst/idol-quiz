import ProfileProject from "@/features/about/components/ProfileProject";
import Skills from "@/features/about/components/Skills";
import WhatIFocusedOn from "@/features/about/components/WhatIFocusedOn";

const AboutPage = () => {
  return (
    <div className="mx-auto flex w-full flex-col gap-4">
      <ProfileProject />
      <WhatIFocusedOn />
      <Skills />
    </div>
  );
};

export default AboutPage;
