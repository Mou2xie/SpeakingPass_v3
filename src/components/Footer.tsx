import { RiTwitterFill } from "@remixicon/react"
import { RiLinkedinBoxFill } from "@remixicon/react"
import { RiMailFill } from "@remixicon/react"

export const Footer = () => {
    return (
        <footer className=" footer sm:footer-horizontal bg-base-300 p-10">
            <aside>
                <p className="text-text-main">
                    SpeakingPass
                    <br />
                    Copyright © {new Date().getFullYear()} - All right reserved
                </p>
            </aside>
            <nav>
                <h6 className="footer-title">Social</h6>
                <div className="grid grid-flow-col gap-4">
                    <a className="link link-hover" href="mailto:jedxie2022@gmail.com">
                        <RiMailFill size={30} className=" text-text-main" />
                    </a>
                    <a className="link link-hover" href="https://x.com/Jedxie3">
                        <RiTwitterFill size={30} className=" text-text-main" />
                    </a>
                    <a className="link link-hover" href="www.linkedin.com/in/yongjie-xie-95919632b">
                        <RiLinkedinBoxFill size={30} className=" text-text-main" />
                    </a>
                </div>
            </nav>
        </footer>
    )
}