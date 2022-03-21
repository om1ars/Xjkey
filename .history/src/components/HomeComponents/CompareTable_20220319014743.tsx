import React from "react";

export default function CompareTable() {
  return (
    <div>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow-md ">
              <table className="min-w-full">
                <thead className="bg-white  ">
                  <tr className="">
                    <th
                      scope="col"
                      className="py-3 px-6 text-left text-xs font-medium uppercase tracking-wider text-gray-700 dark:text-gray-400"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6   pt-10 pb-10 text-left text-xs font-medium uppercase tracking-wider text-gray-700 dark:text-gray-400"
                    >
                      Color
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 text-left text-xs font-medium uppercase tracking-wider text-gray-700 dark:text-gray-400"
                    >
                      Category
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 text-left text-xs font-medium uppercase tracking-wider text-gray-700 dark:text-gray-400"
                    >
                      Price
                    </th>
                    <th scope="col" className="relative py-3 px-6">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* Product 1 */}
                  <tr className="border-b odd:bg-white even:bg-gray-50 dark:border-gray-600 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                    <td className="whitespace-nowrap border-t py-4 px-6 pt-6 pb-6 text-sm font-medium text-gray-900 dark:text-white">
                      Coding Workspace
                    </td>
                    <td className="whitespace-nowrap border-t py-4 px-6 text-sm text-gray-500 dark:text-gray-400">
                      Sliver
                    </td>
                    <td className="whitespace-nowrap border-t py-4 px-6 text-sm text-gray-500 dark:text-gray-400">
                      Laptop
                    </td>
                    <td className="whitespace-nowrap border-t py-4 px-6 text-sm text-gray-500 dark:text-gray-400">
                      $2999
                    </td>
                    <td className="text border-t-right whitespace-nowrap py-4 px-6 text-sm font-medium">
                      <a
                        href="#"
                        className="text-blue-600 hover:underline dark:text-blue-500"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                  {/* Product 2 */}
                  <tr className="border-b odd:bg-white even:bg-gray-50 dark:border-gray-600 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                    <td className="whitespace-nowrap py-4 px-6 pt-6 pb-6 text-sm font-medium text-gray-900 dark:text-white">
                      100+ Practice Questions
                    </td>
                    <td className="whitespace-nowrap py-4 px-6 text-sm text-gray-500 dark:text-gray-400">
                      White
                    </td>
                    <td className="whitespace-nowrap py-4 px-6 text-sm text-gray-500 dark:text-gray-400">
                      Desktop Pc
                    </td>
                    <td className="whitespace-nowrap py-4 px-6 text-sm text-gray-500 dark:text-gray-400">
                      $1999
                    </td>
                    <td className="whitespace-nowrap py-4 px-6 text-right text-sm font-medium">
                      <a
                        href="#"
                        className="text-blue-600 hover:underline dark:text-blue-500"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                  {/* Product 3 */}
                  <tr className="border-b odd:bg-white even:bg-gray-50 dark:border-gray-600 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                    <td className="whitespace-nowrap py-4 px-6 pt-6 pb-6 text-sm font-medium text-gray-900 dark:text-white">
                      Data Structures Content
                    </td>
                    <td className="whitespace-nowrap py-4 px-6 text-sm text-gray-500 dark:text-gray-400">
                      White
                    </td>
                    <td className="whitespace-nowrap py-4 px-6 text-sm text-gray-500 dark:text-gray-400">
                      Phone
                    </td>
                    <td className="whitespace-nowrap py-4 px-6 text-sm text-gray-500 dark:text-gray-400">
                      $999
                    </td>
                    <td className="whitespace-nowrap py-4 px-6 text-right text-sm font-medium">
                      <a
                        href="#"
                        className="text-blue-600 hover:underline dark:text-blue-500"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                  {/* Product 4 */}
                  <tr className="border-b odd:bg-white even:bg-gray-50 dark:border-gray-600 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                    <td className="whitespace-nowrap py-4 px-6 pt-6 pb-6 text-sm font-medium text-gray-900 dark:text-white">
                      Guided Format
                    </td>
                    <td className="whitespace-nowrap py-4 px-6 text-sm text-gray-500 dark:text-gray-400">
                      White
                    </td>
                    <td className="whitespace-nowrap py-4 px-6 text-sm text-gray-500 dark:text-gray-400">
                      Accessories
                    </td>
                    <td className="whitespace-nowrap py-4 px-6 text-sm text-gray-500 dark:text-gray-400">
                      $99
                    </td>
                    <td className="whitespace-nowrap py-4 px-6 text-right text-sm font-medium">
                      <a
                        href="#"
                        className="text-blue-600 hover:underline dark:text-blue-500"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                  {/* Product 5 */}
                  <tr className="border-b odd:bg-white even:bg-gray-50 dark:border-gray-600 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                    Multiple Programming Languages
                    <td className="whitespace-nowrap py-4 px-6 text-sm text-gray-500 dark:text-gray-400">
                      Pink
                    </td>
                    <td className="whitespace-nowrap py-4 px-6 text-sm text-gray-500 dark:text-gray-400">
                      Accessories
                    </td>
                    <td className="whitespace-nowrap py-4 px-6 text-sm text-gray-500 dark:text-gray-400">
                      $599
                    </td>
                    <td className="whitespace-nowrap py-4 px-6 text-right text-sm font-medium">
                      <a
                        href="#"
                        className="text-blue-600 hover:underline dark:text-blue-500"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
