const Card = ({ title, children }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
    <h2 className="text-xl font-bold mb-4">{title}</h2>
    {children}
  </div>
);

export default Card;
