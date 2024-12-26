const ListItem = ({ application }) => {
  return (
    <>
      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        
        <td class="w-4 p-4">
          <div class="flex items-center">
            <input
              id="checkbox-table-search-1"
              type="checkbox"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label for="checkbox-table-search-1" class="sr-only">
              checkbox
            </label>
          </div>
        </td>
        <th
          scope="row"
          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {application.applicationNo}
        </th>
        <td class="px-6 py-4">{application.creationDate}</td>
        <td class="px-6 py-4">
          {application.agentName}, {application.channel == 1 ? "MGA" : "PA"}
        </td>
        <td class="px-6 py-4">
          {application.productName}, ${application.premium}(
          {application.premiumCurrency})
          <br /> {application.payYears} Years
          <br /> ...
        </td>
        <td class="px-6 py-4">
          {(application.status >= 7 && (
            <span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-3 py-1 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">
              Recovered
            </span>
          )) ||
            (application.status == 5 && (
              <span class="bg-pink-100 text-pink-800 text-xs font-medium me-2 px-5 py-1 rounded dark:bg-gray-700 dark:text-pink-400 border border-pink-400">
                Failed
              </span>
            )) ||
            (application.status == 4 && (
              <span class="bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2 py-1 rounded dark:bg-gray-700 dark:text-indigo-400 border border-indigo-400">
                Incomplete
              </span>
            ))}
        </td>
        <td class="px-6 py-4">
          {application.status <= 6 ? (
            <a
              href="#"
              class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              Recover
            </a>
          ) : (
            <></>
          )}
          <a
            href="#"
            class="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-5"
          >
            Copy JSON
          </a>
        </td>
      </tr>
      {/* <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td class="w-4 p-4">
                <div class="flex items-center">
                  <input
                    id="checkbox-table-search-1"
                    type="checkbox"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-table-search-1" class="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                6000123123
              </th>
              <td class="px-6 py-4">Dec 12, 2024</td>
              <td class="px-6 py-4">Sufomi Takashi, PA</td>
              <td class="px-6 py-4">
                GASA, $1000(USD)
                <br /> 12 Years
                <br /> ...
              </td>
              <td class="px-6 py-4">
                <span class="bg-pink-100 text-pink-800 text-xs font-medium me-2 px-5 py-1 rounded dark:bg-gray-700 dark:text-pink-400 border border-pink-400">
                  Failed
                </span>
              </td>
              <td class="px-6 py-4">
                <a
                  href="#"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Recover
                </a>
                <a
                  href="#"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-5"
                >
                  Copy JSON
                </a>
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td class="w-4 p-4">
                <div class="flex items-center">
                  <input
                    id="checkbox-table-search-2"
                    type="checkbox"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-table-search-2" class="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                2000121345
              </th>
              <td class="px-6 py-4">Dec 12, 2024</td>
              <td class="px-6 py-4">Kudo Takashi, MGA</td>
              <td class="px-6 py-4">
                FRA, ¥10000(YEN)
                <br /> 20 Years
                <br /> ...
              </td>
              <td class="px-6 py-4">
                <span class="bg-pink-100 text-pink-800 text-xs font-medium me-2 px-5 py-1 rounded dark:bg-gray-700 dark:text-pink-400 border border-pink-400">
                  Failed
                </span>
              </td>
              <td class="px-6 py-4">
                <a
                  href="#"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Recover
                </a>
                <a
                  href="#"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-5"
                >
                  Copy JSON
                </a>
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td class="w-4 p-4">
                <div class="flex items-center">
                  <input
                    id="checkbox-table-search-3"
                    type="checkbox"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-table-search-3" class="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                2000848492
              </th>
              <td class="px-6 py-4">Dec 13, 2024</td>
              <td class="px-6 py-4">Kudo Takashi, MGA</td>
              <td class="px-6 py-4">
                NIP, ¥5000(YEN)
                <br /> 10 Years
                <br /> ...
              </td>
              <td class="px-6 py-4">
                <span class="bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2 py-1 rounded dark:bg-gray-700 dark:text-indigo-400 border border-indigo-400">
                  Incomplete
                </span>
              </td>
              <td class="px-6 py-4">
                <a
                  href="#"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Recover
                </a>
                <a
                  href="#"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-5"
                >
                  Copy JSON
                </a>
              </td>
            </tr> */}
    </>
  );
};

export default ListItem;
