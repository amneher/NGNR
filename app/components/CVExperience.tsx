import { ResumeItem } from "@/app/models/resume";
import helpers, { hashString } from "@/app/utils/helpers";

const CVExperience = ({ experience }: { experience: ResumeItem[] | null }) => {
  return (
    <div>
      <ul>
        {experience && experience.map((item) => {
          return (
            <li key={item.id}>
              <div>
                <p>
                  {item.title} - {item.company}
                </p>
                <p>
                  From:{" "}
                  {helpers.stringToFriendlyDate(item.startDate.toISOString())}{" "}
                  To:{" "}
                  {helpers.stringToFriendlyDate(item.endDate?.toISOString())}
                </p>
                <p>{item.description}</p>
                <ul>
                  {item.items.map((line) => {
                    return (
                      <li key={hashString(line)}>
                        <p>{line}</p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CVExperience;
