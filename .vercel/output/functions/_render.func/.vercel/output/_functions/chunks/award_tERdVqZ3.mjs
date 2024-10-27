const award = new Proxy({"src":"/_astro/award.p4u0XXiJ.webp","width":1280,"height":960,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/arsla/OneDrive/Desktop/waseem-andrabi/public/image_gallery/award.webp";
							}
							
							return target[name];
						}
					});

export { award as default };
