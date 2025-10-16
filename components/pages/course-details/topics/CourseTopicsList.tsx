import React from "react";
import courseTopics, { ContentTypes } from "@/lib/courseTopics";
import Accordion from "@/components/ui/Accordion";
import CourseTopicItem from "./CourseTopicItem";
import PDFViewer from "@/components/ui/PDFViewer";
import ExamViewer from "@/components/global/ExamViewer";

function CourseTopicsList() {
  return (
    <div>
      {courseTopics.map((topic, index) => (
        <Accordion key={index} title={topic.title}>
          {(topic.content as ContentTypes[]).map((item, index) => (
            <div key={index} className="not-last:border-b border-gray-200">
              {item.type == "exam" ? (
                <ExamViewer questions={item.questions}>
                  <CourseTopicItem item={item} />
                </ExamViewer>
              ) : (
                <PDFViewer pdfPath="https://pdfobject.com/pdf/sample.pdf">
                  <CourseTopicItem item={item} />
                </PDFViewer>
              )}
            </div>
          ))}
        </Accordion>
      ))}
    </div>
  );
}

export default CourseTopicsList;
