'use client';

import { Editor } from '@/components/plate-ui/editor';
import { FloatingToolbar } from '@/components/plate-ui/floating-toolbar';
import { FloatingToolbarButtons } from '@/components/plate-ui/floating-toolbar-buttons';
import { BasicElementsPlugin } from '@udecode/plate-basic-elements/react';
import { BasicMarksPlugin } from '@udecode/plate-basic-marks/react';
import { BlockquotePlugin } from '@udecode/plate-block-quote/react';
import { createPlateEditor, Plate } from '@udecode/plate-common/react';

const editor = createPlateEditor({
  plugins: [
    BasicElementsPlugin,
    BasicMarksPlugin,
    BlockquotePlugin,
    // CodeBlockPlugin,
    // ParagraphPlugin,
    // HeadingPlugin,
    // HorizontalRulePlugin,
    // LinkPlugin.configure({
    //   render: { afterEditable: () => <LinkFloatingToolbar /> },
    // }),
    // ListPlugin,
    // ImagePlugin,
    // CaptionPlugin.configure({
    //   options: { plugins: [ImagePlugin, MediaEmbedPlugin] },
    // }),
    // TablePlugin,
    // TodoListPlugin,
    // DatePlugin,
    // BoldPlugin,
    // ItalicPlugin,
    // UnderlinePlugin,
    // StrikethroughPlugin,
    // CodePlugin,
    // SubscriptPlugin,
    // SuperscriptPlugin,
    // FontColorPlugin,
    // FontBackgroundColorPlugin,
    // FontSizePlugin,
    // HighlightPlugin,
    // KbdPlugin,
    // AlignPlugin.configure({
    //   inject: { targetPlugins: ['p', 'h1', 'h2', 'h3'] },
    // }),
    // IndentPlugin.configure({
    //   inject: { targetPlugins: ['p', 'h1', 'h2', 'h3'] },
    // }),
    // IndentListPlugin.configure({
    //   inject: { targetPlugins: ['p', 'h1', 'h2', 'h3'] },
    // }),
    // LineHeightPlugin.configure({
    //   inject: {
    //     nodeProps: {
    //       defaultNodeValue: 1.5,
    //       validNodeValues: [1, 1.2, 1.5, 2, 3],
    //     },
    //     targetPlugins: ['p', 'h1', 'h2', 'h3'],
    //   },
    // }),
    // AutoformatPlugin.configure({
    //   options: {
    //     enableUndoOnDelete: true,
    //     rules: [
    //       // Usage: https://platejs.org/docs/autoformat
    //     ],
    //   },
    // }),
    // BlockSelectionPlugin,
    // EmojiPlugin,
    // ExitBreakPlugin.configure({
    //   options: {
    //     rules: [
    //       {
    //         hotkey: 'mod+enter',
    //       },
    //       {
    //         before: true,
    //         hotkey: 'mod+shift+enter',
    //       },
    //       {
    //         hotkey: 'enter',
    //         level: 1,
    //         query: {
    //           allow: ['h1', 'h2', 'h3'],
    //           end: true,
    //           start: true,
    //         },
    //         relative: true,
    //       },
    //     ],
    //   },
    // }),
    // NodeIdPlugin,
    // ResetNodePlugin.configure({
    //   options: {
    //     rules: [
    //       // Usage: https://platejs.org/docs/reset-node
    //     ],
    //   },
    // }),
    // DeletePlugin,
    // SoftBreakPlugin.configure({
    //   options: {
    //     rules: [
    //       { hotkey: 'shift+enter' },
    //       {
    //         hotkey: 'enter',
    //         query: {
    //           allow: ['code_block', 'blockquote', 'td', 'th'],
    //         },
    //       },
    //     ],
    //   },
    // }),
    // TabbablePlugin,
    // TrailingBlockPlugin.configure({
    //   options: { type: 'p' },
    // }),
  ],
  override: {
    // components: withPlaceholders({
    //   [BlockquotePlugin.key]: BlockquoteElement,
    //   [CodeBlockPlugin.key]: CodeBlockElement,
    //   [CodeLinePlugin.key]: CodeLineElement,
    //   [CodeSyntaxPlugin.key]: CodeSyntaxLeaf,
    //   [HorizontalRulePlugin.key]: HrElement,
    //   [ImagePlugin.key]: ImageElement,
    //   [LinkPlugin.key]: LinkElement,
    //   [HEADING_KEYS.h1]: withProps(HeadingElement, { variant: 'h1' }),
    //   [HEADING_KEYS.h2]: withProps(HeadingElement, { variant: 'h2' }),
    //   [HEADING_KEYS.h3]: withProps(HeadingElement, { variant: 'h3' }),
    //   [HEADING_KEYS.h4]: withProps(HeadingElement, { variant: 'h4' }),
    //   [HEADING_KEYS.h5]: withProps(HeadingElement, { variant: 'h5' }),
    //   [HEADING_KEYS.h6]: withProps(HeadingElement, { variant: 'h6' }),
    //   [BulletedListPlugin.key]: withProps(ListElement, { variant: 'ul' }),
    //   [NumberedListPlugin.key]: withProps(ListElement, { variant: 'ol' }),
    //   [ListItemPlugin.key]: withProps(PlateElement, { as: 'li' }),
    //   [ParagraphPlugin.key]: ParagraphElement,
    //   [TablePlugin.key]: TableElement,
    //   [TableRowPlugin.key]: TableRowElement,
    //   [TableCellPlugin.key]: TableCellElement,
    //   [TableCellHeaderPlugin.key]: TableCellHeaderElement,
    //   [TodoListPlugin.key]: TodoListElement,
    //   [DatePlugin.key]: DateElement,
    //   [BoldPlugin.key]: withProps(PlateLeaf, { as: 'strong' }),
    //   [CodePlugin.key]: CodeLeaf,
    //   [HighlightPlugin.key]: HighlightLeaf,
    //   [ItalicPlugin.key]: withProps(PlateLeaf, { as: 'em' }),
    //   [KbdPlugin.key]: KbdLeaf,
    //   [StrikethroughPlugin.key]: withProps(PlateLeaf, { as: 's' }),
    //   [SubscriptPlugin.key]: withProps(PlateLeaf, { as: 'sub' }),
    //   [SuperscriptPlugin.key]: withProps(PlateLeaf, { as: 'sup' }),
    //   [UnderlinePlugin.key]: withProps(PlateLeaf, { as: 'u' }),
    // }),
  },
});

export function PlateEditor() {
  return (
    <div className='h-full'>
      <Plate editor={editor}>
        {/* <FixedToolbar>
          <FixedToolbarButtons />
        </FixedToolbar> */}

        <Editor variant={'ghost'} placeholder='Content' className='mt-2 h-96' />

        <FloatingToolbar>
          <FloatingToolbarButtons />
        </FloatingToolbar>
      </Plate>
    </div>
  );
}
