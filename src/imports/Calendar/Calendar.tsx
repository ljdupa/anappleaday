export default function Calendar() {
  const today = new Date();
  const currentDay = today.getDate();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();

  const monthName = today.toLocaleString("default", { month: "long" });

  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const daysInPrevMonth = new Date(currentYear, currentMonth, 0).getDate();

  const cabin = { fontFamily: "Cabin Condensed, sans-serif" };
  const cabinBold = { fontFamily: "Cabin Condensed, sans-serif", fontWeight: 700 };

  const dayLabels = ["S", "M", "T", "W", "T", "F", "S"];

  // Build grid cells
  const cells: { day: number; type: "prev" | "current" | "next" }[] = [];
  for (let i = firstDayOfMonth - 1; i >= 0; i--) {
    cells.push({ day: daysInPrevMonth - i, type: "prev" });
  }
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push({ day: d, type: "current" });
  }
  const remaining = 42 - cells.length;
  for (let d = 1; d <= remaining; d++) {
    cells.push({ day: d, type: "next" });
  }

  // Dot colors per day (cycling pattern matching design)
  const dotColors = ["#F0D41B", "#403B3B", "#E68D06", "#B22626", "#F0D41B", "#B22626", "#B22626"];

  return (
    <div className="relative size-full bg-[#F3EFD4]" style={cabin}>
      {/* Day headers */}
      <div className="grid grid-cols-7 px-[12px] pt-[12px] pb-[4px]">
        {dayLabels.map((d, i) => (
          <div key={i} className="flex justify-center">
            <p style={{ ...cabinBold, color: "#394648", fontSize: "16px" }}>{d}</p>
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 px-[12px] gap-y-[6px]">
        {cells.map((cell, i) => {
          const isToday = cell.type === "current" && cell.day === currentDay;
          const isPast = cell.type === "current" && cell.day < currentDay;
          const isFuture = cell.type === "next" || (cell.type === "current" && cell.day > currentDay);
          const isOtherMonth = cell.type === "prev" || cell.type === "next";

          let bgColor = "#BAC15B";
          let textColor = "#394648";
          let opacity = 1;

          if (isToday) {
            bgColor = "#EC9808";
            textColor = "white";
          } else if (isOtherMonth) {
            bgColor = "#BDBE97";
            opacity = 0.65;
          } else if (isFuture && cell.type === "current") {
            bgColor = "#BDBE97";
          }

          const dotColor = dotColors[i % 7];

          return (
            <div key={i} className="flex flex-col items-center gap-[2px]">
              <div
                className="flex items-center justify-center rounded-full"
                style={{
                  width: "31px", height: "31px",
                  backgroundColor: bgColor,
                  opacity,
                }}
              >
                <p style={{ ...cabinBold, color: textColor, fontSize: "16px" }}>{cell.day}</p>
              </div>
              {/* Dot — only for past/today current month days */}
              {(isPast || isToday) && cell.type === "current" && (
                <div style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: dotColor }} />
              )}
              {!(isPast || isToday) && <div style={{ width: "6px", height: "6px" }} />}
            </div>
          );
        })}
      </div>
    </div>
  );
}