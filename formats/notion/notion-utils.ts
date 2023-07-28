import { pathToFilename } from '../../util';
import { stripFileExtension } from '../../util';

export const isNotionId = (id: string) =>
	/ ?[a-z0-9]{32}(\.(md|csv))?$/.test(id);

export const stripNotionId = (id: string) => {
	return id.replace(/ ?[a-z0-9]{32}(\.(md|csv))?$/, '');
};

export const getNotionId = (id: string) => {
	return id.replace(/-/g, '').match(/([a-z0-9]{32})(\.|$)/)?.[1];
};

export const matchAttachmentLinks = (body: string, filePath: string) => {
	const thisFileHref = encodeURIComponent(
		stripFileExtension(pathToFilename(filePath))
	);
	return body.match(
		new RegExp(`<a href="${thisFileHref}\\/((?!html)[^"])+".*?<\\/a>`, 'g')
	);
};

export const matchRelationLinks = (body: string) => {
	return body.match(/<a href="[^"]+(%20| )[a-z0-9]{32}\.html".*?<\/a>/g);
};

export const extractHref = (a: string) => {
	return a.match(/href="(.*?)"/)?.[1];
};

export const getAttachmentPath = (
	href: string,
	parentFolder: string
): string => {
	const path = parentFolder + '/' + decodeURI(href);
	return path;
};