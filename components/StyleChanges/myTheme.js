export default {
  modalHeader: {
    base: "mb-2 text-lg font-semibold text-gray-700 dark:text-gray-300",
  },
  modal: {
    base:
      "w-full h-auto px-6 py-4 overflow-hidden bg-white rounded-t-lg dark:bg-gray-800 sm:rounded-lg sm:m-4 sm:max-w-xl",
  },
  modalBody: {
    base:
      "mb-6 max-h-64 overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 dark:scrollbar-thumb-gray-600 dark:scrollbar-track-gray-900 text-sm rounded-t-lg scrollbar-thumb-rounded",
  },
  card: {
    base: "transition min-w-0 rounded-lg shadow-xs overflow-hidden",
    default: "bg-white dark:bg-gray-800",
  },
  cardBody: {
    base: "transition p-4",
  },
  alert: {
    danger: "bg-red-200 text-red-900 dark:bg-red-500 dark:text-white",
    icon: {
      danger: "text-red-700 dark:text-white",
    },
  },
};
