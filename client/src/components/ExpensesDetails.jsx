const ExpensesDetails = ({ icon, title, date, amount }) => {
  return (
    <div className="flex justify-between w-[364px] h-[68px] bg-lightSecondaryTxt rounded-[20px] p-[10px]">
      <div className="flex just-between gap-4">
        <div className="icon text-lightSecondaryTxt w-[88px] h-[48px] bg-iconGradient rounded-[18px] text-center flex justify-center items-center text-[32px]">
          <i class={`${icon} h-full flex items-center justify-center`}></i>
        </div>
        <div className="content">
          <h1 className="font-primaryFont font-bold text-[16px]">{title}</h1>
          <p className="font-primaryFont italic text-[12px]">{date}</p>
        </div>
      </div>
      <p className="font-shareTechMono text-[28px]">PHP{amount}</p>
    </div>
  );
};

export default ExpensesDetails;
