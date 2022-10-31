export const getRecentSites = async (historyNumber = 10) => {
   // eslint-disable-next-line no-undef
   const history = await chrome.history.search({
      text: '',
      maxResults: 125,
   })
   const result = []

   if (Array.isArray(history)) {
      const pushedLink = {}

      const sortedDate = history.sort((a, b) => {
         if (a.visitCount < b.visitCount) {
            return 1
         } else if (a.visitCount > b.visitCount) {
            return -1
         } else {
            return 0
         }
      })

      for (const item of sortedDate) {
         if (result.length === historyNumber) {
            return result
         }

         const url = new URL(item.url)

         if (!pushedLink[url.origin]) {
            result.push({
               title: url.hostname.replace('www.', ''),
               url: url.origin,
               icon: `https://s2.googleusercontent.com/s2/favicons?domain_url=${item.url}&size=32`,
            })

            pushedLink[url.origin] = true
         }
      }
   }

   return result
}

export const getRandomFloat = (min = 1, max = 10, decimals = 0) => {
   const str = (Math.random() * (max - min) + min).toFixed(decimals)

   return parseFloat(str)
}
