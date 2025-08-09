// src/components/Table.js
export default function Table({ data }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-dark-700">
        <thead>
          <tr>
            {Object.keys(data[0]).map((key) => (
              <th 
                key={key} 
                className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
              >
                {key}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-dark-700">
          {data.map((row, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-dark-800' : 'bg-dark-900/50'}>
              {Object.values(row).map((value, i) => (
                <td key={i} className="px-4 py-3 text-sm">
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}