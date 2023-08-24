import { ContainerAvatarGui } from "../components/container-avatar-gui/ContainerAvatarGui"
import Navbar from "../components/navbar/Navbar";

export const Guilherme = () => {
  return (
    <>
    <Navbar linkLinkedin="https://www.linkedin.com/in/guilherme-silva-38b771221/" linkGit="https://github.com/remix-pc" />
      <main className="page-main">
        <div className="page-content">
          <ContainerAvatarGui/>
        </div>
      </main>
    </>
  )
}
