'use client'

import { about_me_personal, about_me_professional  } from '@/helpers/strings'
import { FC } from 'react'
import SimpleBar from 'simplebar-react'
import Code from '@/components/Code'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/Tabs'

const DocumentationTabs: FC = () => {
  return (
    <Tabs defaultValue='Personal' className='max-w-2xl w-full'>
      <TabsList>
        <TabsTrigger value='Personal'>Personal</TabsTrigger>
        <TabsTrigger value='Professional'>Professional</TabsTrigger>
      </TabsList>
      <TabsContent value='Personal'>
        <SimpleBar className='h-96'>
          <Code animated code={about_me_personal} language='javascript' show />
        </SimpleBar>
      </TabsContent>
      <TabsContent value='Professional'>
        <SimpleBar className='h-96 simplebar-scrollable-x'>
          <Code animated code={about_me_professional} language='python' show />
        </SimpleBar>
      </TabsContent>
    </Tabs>
  )
}

export default DocumentationTabs