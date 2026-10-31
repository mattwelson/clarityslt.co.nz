import type { RenderedContent } from "astro:content"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Card, CardContent } from "@/components//ui/card"

export function FaqAccordion({
  items,
}: {
  items: {
    data: {
      question: string
    }
    rendered?: RenderedContent
  }[]
}) {
  return (
    <Card className="my-8">
      <CardContent>
        <Accordion defaultValue={items[0] ? [items[0].data.question] : []}>
          {items.map((item) => (
            <AccordionItem value={item.data.question}>
              <AccordionTrigger>{item.data.question}</AccordionTrigger>
              <AccordionContent>
                <div
                  className=""
                  dangerouslySetInnerHTML={{
                    __html: item.rendered?.html ?? "",
                  }}
                />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  )
}
