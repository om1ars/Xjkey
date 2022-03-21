import React from "react";
import { MdOutlineDone } from "react-icons/md";

export default function CompareTable() {
  return (
    <div>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow-md ">
              <table className="min-w-full text-text">
                <thead className="bg-white  ">
                  <tr className="">
                    <th
                      scope="col"
                      className="text-gray-700 dark:text-gray-400 py-3 px-6 text-left text-xs font-medium uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="text-gray-700 dark:text-gray-400   py-3 px-6 pt-10 pb-10 text-left text-xs font-medium uppercase tracking-wider"
                    >
                      Color
                    </th>
                    <th
                      scope="col"
                      className="text-gray-700 dark:text-gray-400 py-3 px-6 text-left text-xs font-medium uppercase tracking-wider"
                    >
                      Category
                    </th>
                    <th
                      scope="col"
                      className="text-gray-700 dark:text-gray-400 py-3 px-6 text-left text-xs font-medium uppercase tracking-wider"
                    >
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {/* Product 1 */}
                  <tr className="border-b border-gray ">
                    <td className="text-gray-900 whitespace-nowrap border-t py-4 px-6 pt-6 pb-6 text-sm font-medium dark:text-white">
                      Coding Workspace
                    </td>
                    <td className="text-gray-500 dark:text-gray-400 whitespace-nowrap border-t py-4 px-6 text-sm">
                      <span className="rounded bg-successColor pl-24 pr-24 pt-2 pb-2 text-successText">
                        Mavjud
                      </span>
                    </td>
                    <td className="text-gray-500 dark:text-gray-400 whitespace-nowrap border-t py-4 px-6 text-sm">
                      <span className="rounded bg-successColor pl-24 pr-24 pt-2 pb-2 text-successText">
                        Mavjud
                      </span>
                    </td>
                    <td className="text-gray-500 dark:text-gray-400 whitespace-nowrap py-4 px-6 text-sm">
                    <span className="rounded bg-successColor pl-24 pr-24 pt-2 pb-2 text-successText">
                        Mavjud
                      </span>{" "}
                    </td>
                  </tr>
                  {/* Product 2 */}
                  <tr className="border-b border-gray ">
                    <td className="text-gray-900 whitespace-nowrap py-4 px-6 pt-6 pb-6 text-sm font-medium dark:text-white">
                      100+ Practice Questions
                    </td>
                    <td className="text-gray-500 dark:text-gray-400 whitespace-nowrap py-4 px-6 text-sm">
                      <span className="rounded bg-successColor pl-24 pr-24 pt-2 pb-2 text-successText">
                        Mavjud
                      </span>{" "}
                    </td>
                    <td className="text-gray-500 dark:text-gray-400 whitespace-nowrap py-4 px-6 text-sm">
                      <span className="rounded bg-successColor pl-24 pr-24 pt-2 pb-2 text-successText">
                        Mavjud
                      </span>{" "}
                    </td>
                    <td className="text-gray-500 dark:text-gray-400 whitespace-nowrap py-4 px-6 text-sm">
                    <span className="rounded bg-successColor pl-24 pr-24 pt-2 pb-2 text-successText">
                        Mavjud
                      </span>{" "}
                    </td>
                  </tr>
                  {/* Product 3 */}
                  <tr className="border-b border-gray ">
                    <td className="text-gray-900 whitespace-nowrap py-4 px-6 pt-6 pb-6 text-sm font-medium dark:text-white">
                      Data Structures Content
                    </td>
                    <td className="text-gray-500 dark:text-gray-400 whitespace-nowrap py-4 px-6 text-sm">
                    <span className="rounded bg-successColor pl-24 pr-24 pt-2 pb-2 text-successText">
                        Mavjud
                      </span>{" "}
                    </td>
                    <td className="text-gray-500 dark:text-gray-400 whitespace-nowrap py-4 px-6 text-sm">
                      <span className="rounded bg-dangerColor pl-24 pr-24 pt-2 pb-2 text-dangerText">
                        Hali yuq
                      </span>
                    </td>
                    <td className="text-gray-500 dark:text-gray-400 whitespace-nowrap py-4 px-6 text-sm">
                    <span className="rounded bg-successColor pl-24 pr-24 pt-2 pb-2 text-successText">
                        Mavjud
                      </span>{" "}
                    </td>
                  </tr>
                  {/* Product 4 */}
                  <tr className="border-b border-gray ">
                    <td className="text-gray-900 whitespace-nowrap py-4 px-6 pt-6 pb-6 text-sm font-medium dark:text-white">
                      Guided Format
                    </td>
                    <td className="text-gray-500 dark:text-gray-400 whitespace-nowrap py-4 px-6 text-sm">
                      <span className="rounded bg-dangerColor pl-24 pr-24 pt-2 pb-2 text-dangerText">
                        Hali yuq
                      </span>
                    </td>
                    <td className="text-gray-500 dark:text-gray-400 whitespace-nowrap py-4 px-6 text-sm">
                      <span className="rounded bg-successColor pl-24 pr-24 pt-2 pb-2 text-successText">
                        Mavjud
                      </span>
                    </td>
                    <td className="text-gray-500 dark:text-gray-400 whitespace-nowrap py-4 px-6 text-sm">
                      <span className="rounded bg-successColor pl-24 pr-24 pt-2 pb-2 text-successText">
                        Mavjud
                      </span>
                    </td>
                  </tr>
                  {/* Product 5 */}
                  <tr className="border-b border-gray ">
                    <td className="text-gray-900 whitespace-nowrap py-4 px-6 pt-6 pb-6 text-sm font-medium dark:text-white">
                      Multiple Programming Languages{" "}
                    </td>
                    <td className="text-gray-500 dark:text-gray-400 whitespace-nowrap py-4 px-6 text-sm">
                      <span className="bg-green-100 rounded pl-24 pr-24 pt-2 pb-2">
                        Mavjud
                      </span>
                    </td>
                    <td className="text-gray-500 dark:text-gray-400 whitespace-nowrap py-4 px-6 text-sm">
                      <span className="rounded bg-successColor pl-24 pr-24 pt-2 pb-2 text-successText">
                        Mavjud
                      </span>
                    </td>
                    <td className="text-gray-500 dark:text-gray-400 whitespace-nowrap py-4 px-6 text-sm">
                      <span className="rounded bg-successColor pl-24 pr-24 pt-2 pb-2 text-successText">
                        Mavjud
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b border-gray ">
                    <td className="text-gray-900 whitespace-nowrap py-4 px-6 pt-6 pb-6 text-sm font-medium dark:text-white">
                      Multiple Programming Languages{" "}
                    </td>
                    <td className="text-gray-500 dark:text-gray-400 whitespace-nowrap py-4 px-6 text-sm">
                      <span className="bg-green-100 rounded pl-24 pr-24 pt-2 pb-2">
                        Mavjud
                      </span>
                    </td>
                    <td className="text-gray-500 dark:text-gray-400 whitespace-nowrap py-4 px-6 text-sm">
                      <span className="rounded bg-successColor pl-24 pr-24 pt-2 pb-2 text-successText">
                        Mavjud
                      </span>
                    </td>
                    <td className="text-gray-500 dark:text-gray-400 whitespace-nowrap py-4 px-6 text-sm">
                      <span className="rounded bg-successColor pl-24 pr-24 pt-2 pb-2 text-successText">
                        Mavjud
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b border-gray ">
                    <td className="text-gray-900 whitespace-nowrap py-4 px-6 pt-6 pb-6 text-sm font-medium dark:text-white">
                      Video Explanations
                    </td>
                    <td className="text-gray-500 dark:text-gray-400 whitespace-nowrap py-4 px-6 text-sm">
                      <span className="bg-green-100 rounded pl-24 pr-24 pt-2 pb-2">
                        Mavjud
                      </span>
                    </td>
                    <td className="text-gray-500 dark:text-gray-400 whitespace-nowrap py-4 px-6 text-sm">
                      <span className="rounded bg-successColor pl-24 pr-24 pt-2 pb-2 text-successText">
                        Mavjud
                      </span>
                    </td>
                    <td className="text-gray-500 dark:text-gray-400 whitespace-nowrap py-4 px-6 text-sm">
                      <span className="rounded bg-successColor pl-24 pr-24 pt-2 pb-2 text-successText">
                        Mavjud
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b border-gray ">
                    <td className="text-gray-900 whitespace-nowrap py-4 px-6 pt-6 pb-6 text-sm font-medium dark:text-white">
                      Mock Interviews
                    </td>
                    <td className="text-gray-500 dark:text-gray-400 whitespace-nowrap py-4 px-6 text-sm">
                      <span className="bg-green-100 rounded pl-24 pr-24 pt-2 pb-2">
                        Mavjud
                      </span>
                    </td>
                    <td className="text-gray-500 dark:text-gray-400 whitespace-nowrap py-4 px-6 text-sm">
                      <span className="rounded bg-successColor pl-24 pr-24 pt-2 pb-2 text-successText">
                        Mavjud
                      </span>
                    </td>
                    <td className="text-gray-500 dark:text-gray-400 whitespace-nowrap py-4 px-6 text-sm">
                      <span className="rounded bg-successColor pl-24 pr-24 pt-2 pb-2 text-successText">
                        Mavjud
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b border-gray ">
                    <td className="text-gray-900 whitespace-nowrap py-4 px-6 pt-6 pb-6 text-sm font-medium dark:text-white">
                      All-In-One Platform
                    </td>
                    <td className="text-gray-500 dark:text-gray-400 whitespace-nowrap py-4 px-6 text-sm">
                      <span className="bg-green-100 rounded pl-24 pr-24 pt-2 pb-2">
                        Mavjud
                      </span>
                    </td>
                    <td className="text-gray-500 dark:text-gray-400 whitespace-nowrap py-4 px-6 text-sm">
                      <span className="rounded bg-successColor pl-24 pr-24 pt-2 pb-2 text-successText">
                        Mavjud
                      </span>
                    </td>
                    <td className="text-gray-500 dark:text-gray-400 whitespace-nowrap py-4 px-6 text-sm">
                      <span className="rounded bg-successColor pl-24 pr-24 pt-2 pb-2 text-successText">
                        Mavjud
                      </span>
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
