import { useState, useEffect } from "react";

function useIntersectionObserver(ref) {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const currentRef = ref.current;
		const observer = new IntersectionObserver(
			([entry]) => {
				setIsVisible(entry.isIntersecting);
			},
			{ threshold: 0.05 }
		);

		if (currentRef) {
			observer.observe(currentRef);
		}

		return () => {
			if (currentRef) {
				observer.unobserve(currentRef);
			}
		};
	}, [ref]);

	return isVisible;
}

export default useIntersectionObserver;
