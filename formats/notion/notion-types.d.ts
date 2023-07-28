type NotionPropertyType =
	| 'text'
	| 'number'
	| 'select'
	| 'multi_select'
	| 'status'
	| 'date'
	| 'person'
	| 'file'
	| 'checkbox'
	| 'url'
	| 'email'
	| 'phone_number'
	| 'formula'
	| 'relation'
	| 'rollup'
	| 'created_time'
	| 'created_by'
	| 'last_edited_time'
	| 'last_edited_by'
	| 'auto_increment_id';

type ObsidianProperty = (
	| { type: 'text'; content?: string }
	| { type: 'date'; content?: moment.Moment }
	| { type: 'number'; content?: number }
	| { type: 'list'; content?: string[] }
	| { type: 'checkbox'; content: boolean }
) & { title: string; notionType: NotionPropertyType };

type NotionFileInfo = {
	title: string;
	parentIds: string[];
	path: string;
	properties?: ObsidianProperty[];
	body: string;
	description?: string;
	htmlToMarkdown: boolean;
	fullLinkPathNeeded: boolean;
};

type NotionAttachmentInfo = {
	title: string;
	fullLinkPathNeeded: boolean;
};