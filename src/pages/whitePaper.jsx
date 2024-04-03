import Header from "@/components/Header";
import DropBoxes from "@/components/helpers/DropBoxes";
import Layout from "@/layout";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaCopy } from "react-icons/fa";
import { IoMdCopy } from "react-icons/io";

export default function WhitePaper() {
  // const address = "0x7A8A5012022BCCBf3EA4b03cD2bb5583d915fb1A";
  // const [valueToCopy, setValueToCopy] = useState(address);

  // const handleCopyToClipboard = async () => {
  //   try {
  //     await navigator.clipboard.writeText(valueToCopy);
  //     alert("Contract Address copied to clipboard!");
  //   } catch (error) {
  //     console.error("Error copying to clipboard:", error);
  //   }
  // };
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
            <div className="flex-2">WHITE PAPER</div>
            <div className="flex-1"></div>
          </header>
          <DropBoxes />

          <h2
            data-aos="fade-right"
            data-aos-delay="100"
            className="font-upheavtt text-center text-2xl lg:text-3xl "
          >
            What is $CHUCK?
          </h2>
          <p
            data-aos="fade-right"
            data-aos-delay="100"
            className=" text-xl mt-2 text-center"
          >
            $CHUCK is a project that embodies the spirit of dog-themed meme
            coins within the crypto space. It pays homage to the enduring
            relationship between iconic figures and their canine companions,
            represented through $CHUCK, a symbol of resilience and strength. As
            a nod to pop culture heroes and their beloved dogs, $CHUCK stands as
            a tribute to the unique bond shared between them, encapsulating the
            essence of companionship and loyalty.
          </p>

          <h3
            data-aos="fade-right"
            data-aos-delay="100"
            className="font-upheavtt text-center text-2xl lg:text-3xl mt-14  "
          >
            The Vision
          </h3>
          <p
            data-aos="fade-right"
            data-aos-delay="100"
            className=" text-xl mt-2 text-center"
          >
            $CHUCK is a community-centric project with a focus on spotlighting
            the BASE ecosystem. Meme coins serve as an accessible entry point
            for the general public into the realm of cryptocurrency. BASE, being
            an innovative layer two scaling solution for Ethereum, remains
            relatively unknown outside the crypto community. $CHUCK&apos;s
            mission is to amplify interest and engagement within the BASE
            environment, foster increased activity on decentralized exchanges
            (DEXes), boost the total value locked (TVL) on the BASE platform,
            and support the overarching goals set forth by Brian Armstrong and
            the Coinbase team. Moreover, $CHUCK is dedicated to cultivating a
            themed ecosystem and community, offering members a platform to
            connect, share, and create inspired NFTs, merchandise, and games
            that echo the adventurous spirit of 1980&apos;s action movies and
            retro gaming aesthetics.
          </p>

          <h3
            data-aos="fade-right"
            data-aos-delay="100"
            className="font-upheavtt text-center text-2xl lg:text-3xl mt-14  "
          >
            The Utility
          </h3>
          <p
            data-aos="fade-right"
            data-aos-delay="100"
            className=" text-xl mt-2 text-center"
          >
            Designed with fun and community engagement at its core, $CHUCK
            serves as more than just a token; it&apos;s a passport to an
            exclusive club. Owning $CHUCK tokens grants access to the $CHUCK
            Telegram group and Chuck-Bot, a specialized bot providing community
            members with crucial insights into the crypto market, including
            updates on trending coins and ETH gas fees. Token holders are also
            privy to communitygenerated NFTs, games, and exclusive content.
            Beyond its role as a dog-themed meme coin, $CHUCK is committed to
            making a tangible impact on the welfare of dogs. Each $CHUCK
            transaction includes a 5% tax, from which 2% is dedicated to
            supporting dog charities. This initiative marks $CHUCK as the first
            meme coin with a direct focus on benefiting our furry friends,
            aligning with the wider meme culture prevalent in the crypto
            industry.
          </p>

        
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
