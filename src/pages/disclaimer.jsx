import Header from "@/components/Header";
import DropBoxes from "@/components/helpers/DropBoxes";
import Layout from "@/layout";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaCopy } from "react-icons/fa";
import { IoMdCopy } from "react-icons/io";

export default function Disclaimer() {
  return (
    <Layout title="White Paper" show={false}>
      {/* <Header /> */}
      <section className="  min-h-screen pb-10">
        <div className="container mx-auto pt-8 font-nimbus font-light px-2">
          <header className="flex items-center font-upheavtt text-4xl lg:text-6xl justify-between mb-10 ">
            <Link href="/" className="flex-1">
              <div className="w-16 lg:w-16 rounded-md overflow-hidden">
                <Image
                  src="/images/rounded_logo_no_bg.png"
                  alt="Chuk"
                  height={500}
                  width={500}
                  priority
                  className="h-full w-full"
                />
              </div>
            </Link>
            <div className="flex-2">DISCLAIMER</div>
            <div className="flex-1"></div>
          </header>
          <DropBoxes />
          <div>
            <p className="text-center mx-auto max-w-2xl italic">
              Please read the following disclaimer carefully before engaging in
              any buying, selling, or trading oncryptocurrency exchanges such as
              Uniswap.
            </p>
          </div>
          <h2
            data-aos="fade-right"
            data-aos-delay="100"
            className="font-upheavtt mt-10 text-center text-2xl lg:text-3xl "
          >
            Acknowledgment of Risk
          </h2>
          <p
            data-aos="fade-right"
            data-aos-delay="100"
            className=" text-xl mt-2 text-center"
          >
            Trading goods, products, or digital currencies carries inherent
            risk. The value of digital assets can drastically change within
            short timeframes, potentially leading to significant gains or
            losses. Given the unpredictable nature of digital currencies, which
            may even become valueless, consider your financial position
            carefully before participating in such transactions.
          </p>

          <h3
            data-aos="fade-right"
            data-aos-delay="100"
            className="font-upheavtt text-center text-2xl lg:text-3xl mt-14  "
          >
            Transaction Fees
          </h3>
          <p
            data-aos="fade-right"
            data-aos-delay="100"
            className=" text-xl mt-2 text-center"
          >
            Be advised that transaction fees, including a potential 5% sell tax,
            may apply when trading digital assets. Buying may not incur this
            tax. Fee structures are subject to change, and staying informed of
            the current fees is your responsibility.
          </p>

          <h3
            data-aos="fade-right"
            data-aos-delay="100"
            className="font-upheavtt text-center text-2xl lg:text-3xl mt-14  "
          >
            General Investment Disclaimer
          </h3>
          <p
            data-aos="fade-right"
            data-aos-delay="100"
            className=" text-xl mt-2 text-center"
          >
            This document is current as of its last revision and does not offer
            investment, financial, or trading advice. Prior to any investment
            action, it is recommended to undertake personal research and seek
            advice from a financial professional. When you engage in
            transactions, it is under the acknowledgement that you are not
            investing in a security. All products are provided &apos;as is&apos;
            with no guarantee or obligation of support. This platform is part of
            a community-driven decentralized finance initiative and does not
            carry the status of a regulated digital currency. Compliance with
            local regulations, especially where cryptocurrencies are legally
            restricted, is strongly advised.
          </p>

          <h3
            data-aos="fade-right"
            data-aos-delay="100"
            className="font-upheavtt text-center text-2xl lg:text-3xl mt-14  "
          >
            Accuracy of Information
          </h3>
          <p
            data-aos="fade-right"
            data-aos-delay="100"
            className=" text-xl mt-2 text-center"
          >
            We aim to maintain accurate information but will not be held
            responsible for any inaccuracies. Information is offered without
            warranty, and reliance upon it is at your own risk. Regulatory
            Uncertainty: The regulatory environment for digital currencies is
            evolving and may differ widely between jurisdictions. It is
            incumbent upon you to ensure that you are compliant with all
            applicable laws and regulations for your area regarding digital
            currency use and trading.
          </p>

          <h3
            data-aos="fade-right"
            data-aos-delay="100"
            className="font-upheavtt text-center text-2xl lg:text-3xl mt-14  "
          >
            No Guarantees
          </h3>
          <p
            data-aos="fade-right"
            data-aos-delay="100"
            className=" text-xl mt-2 text-center"
          >
            There are no guaranteed profits or assurances against losses in the
            digital currency market. No representation regarding the potential
            value performance of any digital asset has been made to you.{" "}
          </p>

          <h3
            data-aos="fade-right"
            data-aos-delay="100"
            className="font-upheavtt text-center text-2xl lg:text-3xl mt-14  "
          >
            Fictional Representation
          </h3>
          <p
            data-aos="fade-right"
            data-aos-delay="100"
            className=" text-xl mt-2 text-center mb-14"
          >
            Any entities, names, marks, emblems, and images related to Chuck and
            the digital asset discussed are purely fictional for illustrative
            purposes and not connected to any real individuals or entities.
            Their use implies no official endorsement or association.
          </p>
          <hr />
          <div className="mt-12">
            <p className="text-center mx-auto max-w-2xl italic">
              Please read the following disclaimer carefully before engaging in
              any buying, selling, or trading oncryptocurrency exchanges such as
              Uniswap.
            </p>
          </div>

          <Link href="https://www.base.org/" target="_blank">
            <div className="flex items-center gap-1 justify-center text-xl mt-14">
              <div> CHUCK on Base</div>{" "}
              <div className="w-7 lg:w-12 rounded-md overflow-hidden">
                <Image
                  src="/socials/BASE-UNISWAP-TELEGRAM_LOGOS_Plan de travail 1 copie 7.png"
                  // src="/socials/BASE-UNISWAP-TELEGRAM_LOGOS_Plan de travail 1 copie 8.png"
                  alt="Chuk"
                  height={500}
                  width={500}
                  priority
                  className="h-full w-full"
                />
              </div>
            </div>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
// CHUCK: The Memecoin Tribute to Chuck Norris and His Beloved Dog

// Token Details

// Total Supply: 1,000,000,000 CHUCK

// Contract Address: 0x7A8A5012022BCCBf3EA4b03cD2bb5583d915fb1A
// TICKER: CHUCK

// Abstract

// CHUCK is a memecoin project paying homage to the iconic Chuck Norris and his faithful companion, Digby. With a total supply of 1,000,000,000 CHUCK tokens, the project aims to foster a vibrant community centered around Chuck Norris-inspired content and memes. While CHUCK has no direct affiliation with Chuck Norris, it seeks to honor his legendary status in pop culture. Additionally, CHUCK endeavors to promote the BASE ecosystem, a layer two scaling solution for Ethereum, and support charitable initiatives benefiting dogs.

// 1. Introduction

// CHUCK emerges as a tribute to the enduring legacy of Chuck Norris, an emblematic figure in popular culture, and his beloved dog, Digby. This white paper outlines the vision, utility, and objectives of the CHUCK project, emphasizing community engagement, meme culture, and philanthropy.

// 2. Vision

// CHUCK is not merely a memecoin; it is a community-driven endeavor with a vision to elevate the BASE ecosystem and contribute to charitable causes. By leveraging Chuck Norris's cultural significance, CHUCK seeks to increase awareness and participation in the BASE ecosystem, promote decentralized exchanges, and foster a vibrant community centered around Chuck Norris-themed content and activities.

// 3. Utility

// CHUCK tokens offer a range of utilities designed to enrich the experience of holders within the CHUCK community. Holders gain access to exclusive channels, including the CHUCK Telegram group and Chuck-Bot, providing valuable insights into cryptocurrency trends and information. Furthermore, ownership of CHUCK tokens grants access to community-created NFTs, games, and exclusive content, enhancing engagement and participation.

// Beyond its role as a memecoin, CHUCK aims to make a tangible impact on the lives of dogs. Through a 5% tax incurred on every CHUCK token sale, a portion of the proceeds is allocated to the Warrior Dog Foundation. This charitable organization supports the welfare and retirement of working K9s, aligning with CHUCK's commitment to giving back to the community.

// 4. Conclusion

// CHUCK embodies the spirit of community, creativity, and philanthropy, paying tribute to Chuck Norris and his loyal companion, Digby. Through its activities, CHUCK aims to entertain, engage, and make a positive difference in the world. Join us in the CHUCK community as we embark on an adventure inspired by the toughness of Chuck Norris and the loyalty of man's best friend.

// Disclaimer

// CHUCK is a memecoin project and should be treated as such. While efforts have been made to ensure the accuracy of the information provided in this white paper, CHUCK makes no guarantees or warranties regarding the project's performance or future outcomes. Investors should conduct their own research and exercise caution when participating in the CHUCK project.
