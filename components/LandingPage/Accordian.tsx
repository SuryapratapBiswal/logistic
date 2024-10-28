import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

  
  const AccordionPage = () => {
    return (
      <>
        {" "}
        <Accordion type="single" collapsible className="w-full px-4">
          <AccordionItem value="item-1">
            <AccordionTrigger className="flex text-lg font-semibold text-black">
              Is it accessible?
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-5 sm:px-6 sm:pb-6">
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
                aliquam adipisci iusto aperiam? Sint asperiores sequi nobis
                inventore ratione deleniti?
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible className="w-full px-4">
          <AccordionItem value="item-1">
            <AccordionTrigger className="flex text-lg font-semibold text-black">
              {" "}
              What is the difference between a free and paid account?
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-5 sm:px-6 sm:pb-6">
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
                aliquam adipisci iusto aperiam? Sint asperiores sequi nobis
                inventore ratione deleniti?
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </>
    );
  };
  
  export default AccordionPage;
  