import React, { useState, useEffect, useCallback } from "react";
import { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

type PropType = {
	slides: Array<{
		title: string;
		image: { asset: { url: string } };
		description: string;
	}>;
	options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = ({ slides, options }) => {
	const [emblaRef, emblaApi] = useEmblaCarousel(options);
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

	const scrollTo = useCallback(
		(index: number) => emblaApi && emblaApi.scrollTo(index),
		[emblaApi]
	);

	const onInit = useCallback((emblaApi: EmblaCarouselType) => {
		setScrollSnaps(emblaApi.scrollSnapList());
	}, []);

	const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
		setSelectedIndex(emblaApi.selectedScrollSnap());
	}, []);

	useEffect(() => {
		if (!emblaApi) return;

		onInit(emblaApi);
		onSelect(emblaApi);
		emblaApi.on("reInit", onInit);
		emblaApi.on("reInit", onSelect);
		emblaApi.on("select", onSelect);
	}, [emblaApi, onInit, onSelect]);

	return (
		<>
			<div className="embla">
				<div className="overflow-hidden" ref={emblaRef}>
					<div className="flex">
						{slides.map(({ description, image, title }, i) => (
							<div
								className="relative min-w-0 flex flex-col gap-4 flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33%] md:pl-4"
								key={i}
							>
								<div className="relative w-full h-60">
									<Image
										src={image.asset.url}
										alt="Your alt text"
										fill
										className="object-cover"
									/>
								</div>
								<div className="text-3xl">{title}</div>
								<div className="text-base">{description}</div>
							</div>
						))}
					</div>
				</div>
			</div>

			<div className="flex gap-4 w-full justify-center items-center pt-8">
				{scrollSnaps.map((_, index) => (
					<button
						key={index}
						onClick={() => scrollTo(index)}
						className={twMerge(
							"bg-white w-4 h-4 rounded-full transition-colors",
							index === selectedIndex && "bg-blue-300"
						)}
					/>
				))}
			</div>
		</>
	);
};

export default EmblaCarousel;
