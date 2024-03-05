import "./PastProjectHistory.css";

export default function PastProjectHistory({
  projectName,
  pastProjectNo,
  icon,
  color,
}) {
  return (
    <div className="past-project-history flex flex-col items-center justify-around w-2/10 h-9/10">
      <div className="flex items-center justify-center relative h-full w-7/12 ">
        <div
          className="past-project-history-border1 flex items-center justify-center relative "
          style={{
            borderTopColor: color,
          }}
        >
          <div
            className="past-project-history-border2"
            style={{
              borderTopColor: color,
            }}
          >
            {pastProjectNo}
          </div>
        </div>
        <div className="absolute bottom-0 right-0">{icon}</div>
      </div>
      <div className="flex items-center justify-center flex-col h-3/10 w-full">
        <p>successfully completed</p>
        <p>{projectName} projects</p>
      </div>
    </div>
  );
}
