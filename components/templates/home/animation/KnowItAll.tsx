import { Box } from "@chakra-ui/react";
import gsap from "gsap";
import Image from "next/image";
import React, { useEffect } from "react";

interface KnowItAllProp {
	cardOne: string;
	cardTwo: string;
}

const KnowItAll = ({ cardOne, cardTwo }: KnowItAllProp) => {
	const cardOneRef = React.useRef<HTMLDivElement>(null);
	const rootElement = React.useRef<HTMLDivElement>(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
		  // Target the two specific elements we have asigned the animate class
		  gsap.fromTo(
			cardOneRef.current,
			{
			  rotate: 20,
			},
			{
			  rotate: 0,
			  transformOrigin: "bottom center",
			  ease: "bounce",
			  duration: 0.7,
			}
		  );
		}, rootElement); // <- Scope!
	
		return () => ctx.revert();
	  }, [cardOne]);
	return (
		<Box ref={rootElement}>
			<Box
				pos="absolute"
				filter="drop-shadow(0px 9.26698px 18.534px rgba(27, 45, 42, 0.2))"
				left="0rem"
				top="3rem"
				// rounded="2.4rem"
				overflow="hidden"
				ref={cardOneRef}
			>
				<Image
					src={cardOne}
					width={350}
					height={350}
					alt="Animation Card One"
				/>
			</Box>

			<Box
				pos="absolute"
				filter="drop-shadow(0px 11.1509px 22.3017px rgba(27, 45, 42, 0.2))"
				right="-6rem"
				top="-4rem"
				rounded="full"
			>
				<Image
					src={cardTwo}
					width={450}
					height={430}
					alt="Animation Card Two"
				/>
			</Box>
		</Box>
	);
};

export default KnowItAll;
