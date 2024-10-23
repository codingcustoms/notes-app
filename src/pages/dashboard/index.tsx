import { Pin, PlusCircle, Trash2 } from '@/assets/icons';
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Input,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui';
import NotesData from '@/db/dummyNotes.json';
import { cn } from '@/lib/utils';
import { useRef } from 'react';
import Markdown from 'react-markdown';

export const description =
  'An products dashboard with a sidebar navigation. The sidebar has icon navigation. The content area has a breadcrumb and search in the header. It displays a list of products in a table with actions.';

export function Dashboard() {
  return (
    <div className=''>
      <Tabs defaultValue='all'>
        <div className='flex items-center justify-between'>
          <TabsList>
            <TabsTrigger value='all'>All</TabsTrigger>
            <TabsTrigger value='pinned'>Pinned</TabsTrigger>
            <TabsTrigger value='draft'>Draft</TabsTrigger>
            <TabsTrigger value='archived' className='hidden sm:flex'>
              Archived
            </TabsTrigger>
          </TabsList>

          <div>
            <Button size='sm' className='h-7 gap-1'>
              <PlusCircle className='h-3.5 w-3.5' />
              <span className='sr-only sm:not-sr-only sm:whitespace-nowrap'>
                Add Note
              </span>
            </Button>
          </div>
        </div>
        <TabsContent value='all'>
          <Card className='flex flex-col gap-2'>
            <CardHeader>
              <CardTitle>Notes</CardTitle>
              <CardDescription>Manage your notes.</CardDescription>
            </CardHeader>
            <CardContent className='grid sm:grid-cols-4 gap-4'>
              {NotesData.map((item: TObject) => (
                <NotesCard key={item.id} noteData={item} />
              ))}
            </CardContent>
            <CardFooter className='text-xs text-muted-foreground'>
              Showing <strong>1-10</strong> of <strong>32</strong> notes
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

type NotesCardProps = {
  title: string;
  content: string;
  tags: TArray<string>;
  isPinned: boolean;
};

const NotesCard: React.FC<{ noteData: TObject }> = ({ noteData }) => {
  const dialogTriggerRef = useRef<HTMLButtonElement>(null);

  const { content, isPinned, tags, title } = noteData as NotesCardProps;
  const NTags = 3;

  const remainingTags = tags.length - NTags;

  const handleOnClickCard = () => {
    dialogTriggerRef?.current?.click();
  };

  return (
    <>
      <Card
        role='button'
        className='flex flex-col justify-between gap-3 p-5 hover:shadow-lg transition-all ease-in-out min-h-60'
      >
        <CardHeader className='flex-row justify-between items-center p-0'>
          <CardTitle onClick={handleOnClickCard} className='w-[20ch] truncate'>
            {title}
          </CardTitle>
          <CardDescription className='flex items-center gap-1'>
            <Button
              variant={'ghost'}
              size={'icon'}
              className='hover:text-destructive'
            >
              <Trash2 size={20} />
            </Button>
            <Button
              variant={'ghost'}
              size={'icon'}
              className={'hover:text-blue-500'}
            >
              <Pin
                size={20}
                className={cn(
                  'rotate-45',
                  isPinned && 'fill-blue-500 text-blue-500'
                )}
              />
            </Button>
          </CardDescription>
        </CardHeader>
        <CardContent
          onClick={handleOnClickCard}
          className='line-clamp-6 text-pretty p-0 flex-grow'
        >
          <Markdown>{content}</Markdown>
        </CardContent>
        <CardFooter className='p-0 flex gap-2'>
          {tags.slice(0, NTags).map((tag: string) => (
            <Badge key={tag} variant={'outline'}>
              {tag}
            </Badge>
          ))}
          {remainingTags > 0 && <Badge>+{remainingTags}</Badge>}
        </CardFooter>
      </Card>

      <Dialog>
        <DialogTrigger
          ref={dialogTriggerRef}
          className='hidden'
        ></DialogTrigger>
        <DialogContent className='h-[75dvh] w-full max-w-screen-md border border-red-500'>
          <DialogHeader className=''>
            <DialogTitle>
              <Input
                defaultValue={title}
                className='border-transparent shadow-none focus-visible:ring-0 mt-5'
                placeholder='Enter Your Title'
              />
            </DialogTitle>
            <DialogDescription>
              <Markdown>{content}</Markdown>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};
