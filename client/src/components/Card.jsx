const Card = ({ title, total, username, date }) => {
  return (
    <div className="card bg-card bg-cover bg-center w-[335px] h-[194px] text-lightPrimaryBG rounded-[20px]">
      <div className="p-6">
        <p className="text-[16px] font-primaryFont italic">{title}</p>
        <p className="font-shareTechMono text-[42px]">PHP {total}</p>
      </div>
      <div className="flex font-shareTechMono p-5 justify-between text-[16px]">
        <p>{username}</p>
        <p>{date}</p>
      </div>
    </div>
  );
};

export default Card;
