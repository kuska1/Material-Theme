// ╔══════════════════════════════════════════════════════════════════════════╗
// ║                      ORIGINAL CODE BY NEVKO-UI                           ║
// ║               https://github.com/dotFelixan/NEVKO-UI                     ║
// ╚══════════════════════════════════════════════════════════════════════════╝

// USERS DATA
// (https://steamid.xyz/)
const USERS = [
    // Material Dev
    { id: "76561198878285454", badge: "MATERIAL_DEV", description: "Material Theme Dev" },

    // Other themes devs
    { id: "76561198350100453", badge: "NEVKO_DEV", description: "NEVKO-UI Dev" }, // Credits
    { id: "76561199251838449", badge: "SPACETHEME_DEV", description: "SpaceTheme Dev" }, // Credits

    // Contributor? Feel free to add your user data here
    { id: "76561198343678851", badge: "CONTRIBUTOR_MATERIAL", description: "Material Theme Contributor" }, // NeoNyaa
    { id: "76561198998777919", badge: "CONTRIBUTOR_MATERIAL", description: "Material Theme Contributor" }, // toufudealer
    { id: "76561198307068468", badge: "CONTRIBUTOR_MATERIAL", description: "Material Theme Contributor" }, // agsup
]

// Icons
const BADGE_ICONS = {
  MATERIAL_DEV: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21 12c0-2.03-.67-3.91-2-5.62v11.25c1.33-1.66 2-3.54 2-5.63m-3.37 7H6.38c.68.55 1.57 1 2.67 1.41c1.09.39 2.08.59 2.95.59c.88 0 1.86-.2 2.95-.59c1.1-.41 1.99-.86 2.68-1.41M11 17L7 9v8zm6-8l-4 8h4zm-5 5.53L15.75 7h-7.5zM17.63 5C15.97 3.67 14.09 3 12 3s-3.97.67-5.62 2zM5 17.63V6.38C3.67 8.09 3 9.97 3 12c0 2.09.67 3.97 2 5.63M23 12c0 3.03-1.06 5.63-3.22 7.78C17.63 21.94 15.03 23 12 23s-5.62-1.06-7.78-3.22C2.06 17.63 1 15.03 1 12s1.06-5.62 3.22-7.78S8.97 1 12 1s5.63 1.06 7.78 3.22C21.94 6.38 23 8.97 23 12"/></svg>`,
  CONTRIBUTOR_MATERIAL: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m12 14.475l1.925 1.15q.275.175.538-.012t.187-.513l-.5-2.175l1.7-1.475q.25-.225.15-.537t-.45-.338l-2.225-.175l-.875-2.075q-.125-.3-.45-.3t-.45.3l-.875 2.075l-2.225.175q-.35.025-.45.338t.15.537l1.7 1.475l-.5 2.175q-.075.325.188.513t.537.012zM8.65 20H6q-.825 0-1.412-.587T4 18v-2.65L2.075 13.4q-.275-.3-.425-.662T1.5 12t.15-.737t.425-.663L4 8.65V6q0-.825.588-1.412T6 4h2.65l1.95-1.925q.3-.275.663-.425T12 1.5t.738.15t.662.425L15.35 4H18q.825 0 1.413.588T20 6v2.65l1.925 1.95q.275.3.425.663t.15.737t-.15.738t-.425.662L20 15.35V18q0 .825-.587 1.413T18 20h-2.65l-1.95 1.925q-.3.275-.662.425T12 22.5t-.737-.15t-.663-.425z"/></svg>`,
  
  NEVKO_DEV: `<svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1_51)"><mask id="mask0_1_51" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="48" height="48"><path d="M48 0H0V48H48V0Z" fill="white"/></mask><g mask="url(#mask0_1_51)"><path d="M0 23.04C0 12.1788 0 6.74826 3.37413 3.37413C6.74826 0 12.1788 0 23.04 0H24.96C35.8212 0 41.2517 0 44.6259 3.37413C48 6.74826 48 12.1788 48 23.04V24.96C48 35.8212 48 41.2517 44.6259 44.6259C41.2517 48 35.8212 48 24.96 48H23.04C12.1788 48 6.74826 48 3.37413 44.6259C0 41.2517 0 35.8212 0 24.96V23.04Z" fill="#0077FF"/><path d="M11 34.0865C11 33.7551 11.2686 33.4865 11.6 33.4865H13.9135C14.2449 33.4865 14.5135 33.7551 14.5135 34.0865V36.4C14.5135 36.7314 14.2449 37 13.9135 37H11.6C11.2686 37 11 36.7314 11 36.4V34.0865Z" fill="white"/><path d="M16.6216 34.0865C16.6216 33.7551 16.8902 33.4865 17.2216 33.4865H19.5351C19.8665 33.4865 20.1351 33.7551 20.1351 34.0865V36.4C20.1351 36.7314 19.8665 37 19.5351 37H17.2216C16.8902 37 16.6216 36.7314 16.6216 36.4V34.0865Z" fill="white"/><path d="M16.6216 11.6C16.6216 11.2686 16.8902 11 17.2216 11H19.5351C19.8665 11 20.1351 11.2686 20.1351 11.6V13.9135C20.1351 14.2449 19.8665 14.5135 19.5351 14.5135H17.2216C16.8902 14.5135 16.6216 14.2449 16.6216 13.9135V11.6Z" fill="white"/><path d="M11.6 31.3784C11.2686 31.3784 11 31.1098 11 30.7784V28.4649C11 28.1335 11.2686 27.8649 11.6 27.8649H13.9135C14.2449 27.8649 14.5135 28.1335 14.5135 28.4649V30.7784C14.5135 31.1098 14.2449 31.3784 13.9135 31.3784H11.6Z" fill="white"/><path d="M34.0865 31.3784C33.7551 31.3784 33.4865 31.1098 33.4865 30.7784V28.4649C33.4865 28.1335 33.7551 27.8649 34.0865 27.8649H36.4C36.7314 27.8649 37 28.1335 37 28.4649V30.7784C37 31.1098 36.7314 31.3784 36.4 31.3784H34.0865Z" fill="white"/><path d="M22.2432 34.0865C22.2432 33.7551 22.5119 33.4865 22.8432 33.4865H25.1567C25.4881 33.4865 25.7567 33.7551 25.7567 34.0865V36.4C25.7567 36.7314 25.4881 37 25.1567 37H22.8432C22.5119 37 22.2432 36.7314 22.2432 36.4V34.0865Z" fill="white"/><path d="M11.6 25.7568C11.2686 25.7568 11 25.4882 11 25.1568V22.8432C11 22.5118 11.2686 22.2432 11.6 22.2432H13.9135C14.2449 22.2432 14.5135 22.5118 14.5135 22.8432V25.1568C14.5135 25.4882 14.2449 25.7568 13.9135 25.7568H11.6Z" fill="white"/><path d="M27.8649 34.0865C27.8649 33.7551 28.1336 33.4865 28.4649 33.4865H30.7784C31.1098 33.4865 31.3784 33.7551 31.3784 34.0865V36.4C31.3784 36.7314 31.1098 37 30.7784 37H28.4649C28.1336 37 27.8649 36.7314 27.8649 36.4V34.0865Z" fill="white"/><path d="M11.6 20.1351C11.2686 20.1351 11 19.8665 11 19.5351V17.2216C11 16.8902 11.2686 16.6216 11.6 16.6216H13.9135C14.2449 16.6216 14.5135 16.8902 14.5135 17.2216V19.5351C14.5135 19.8665 14.2449 20.1351 13.9135 20.1351H11.6Z" fill="white"/><path d="M33.4865 34.0865C33.4865 33.7551 33.7551 33.4865 34.0865 33.4865H36.4C36.7314 33.4865 37 33.7551 37 34.0865V36.4C37 36.7314 36.7314 37 36.4 37H34.0865C33.7551 37 33.4865 36.7314 33.4865 36.4V34.0865Z" fill="white"/><path d="M11.6 14.5135C11.2686 14.5135 11 14.2449 11 13.9135V11.6C11 11.2686 11.2686 11 11.6 11H13.9135C14.2449 11 14.5135 11.2686 14.5135 11.6V13.9135C14.5135 14.2449 14.2449 14.5135 13.9135 14.5135H11.6Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M28.2162 14.5135H22.8432C22.5119 14.5135 22.2432 14.2449 22.2432 13.9135V11.6C22.2432 11.2686 22.5119 11 22.8432 11H28.2162C33.0673 11 37 14.9326 37 19.7838V25.1568C37 25.4882 36.7314 25.7568 36.4 25.7568H34.0865C33.7552 25.7568 33.4865 25.4882 33.4865 25.1568V19.7838C33.4865 16.8731 31.1269 14.5135 28.2162 14.5135Z" fill="white"/><path d="M29 24.4C29 24.7314 28.7314 25 28.4 25H19.6C19.2686 25 19 24.7314 19 23.6V23.6C19 23.2686 19.2686 23 19.6 23H28.4C28.7314 23 29 23.2686 29 23.6V24.4Z" fill="white"/><rect x="23" y="19" width="2" height="10" rx="0.6" fill="white"/></g></g><defs><clipPath id="clip0_1_51"><rect width="48" height="48" rx="0.6" fill="white"/></clipPath></defs></svg>`,
  SPACETHEME_DEV: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M5.357 17.931a9.531 9.531 0 0 1 11.12-15.338M2.014 17.863c-1.211 2.122-1.617 3.769-.933 4.454c1.039 1.038 4.288-.43 8.051-3.413m4.307-.754l-3.575-3.575l7.946-7.946a5.05 5.05 0 0 1 2.35-1.328l2.043-.513a.843.843 0 0 1 1.022 1.021l-.511 2.045a5.05 5.05 0 0 1-1.33 2.349z"/><path d="M9.864 14.575L6.936 13.6a.422.422 0 0 1-.165-.7l1.02-1.02a3.38 3.38 0 0 1 3.458-.816l1.598.531zm3.575 3.575l.976 2.929a.42.42 0 0 0 .699.165l1.02-1.021a3.38 3.38 0 0 0 .816-3.457l-.531-1.598z"/></g></svg>`
}

// Global Tooltip

let globalTooltip = null

function initTooltip() {
  globalTooltip = document.createElement("div")
  globalTooltip.id = "nevko-tooltip"
  document.body.appendChild(globalTooltip)
}

function showTooltip(element, text) {
  if (!globalTooltip) return
  const rect = element.getBoundingClientRect()
  globalTooltip.textContent = text
  globalTooltip.style.left = rect.left + rect.width / 2 + "px"
  globalTooltip.style.top = rect.top - 8 + "px"
  globalTooltip.style.transform = "translate(-50%, -100%)"
  globalTooltip.classList.add("visible")
}

function hideTooltip() {
  if (!globalTooltip) return
  globalTooltip.classList.remove("visible")
}

// Utilities

// Convert from ID3 to ID64
function steamId3ToSteamId64(steamId3) {
  const BASE = BigInt("76561197960265728")
  return (BASE + BigInt(steamId3)).toString()
}

// Get ID64 from current page
function getPageSteamId() {
  if (window.g_rgProfileData && window.g_rgProfileData.steamid) {
    return window.g_rgProfileData.steamid
  }
  const profileMatch = window.location.pathname.match(/\/profiles\/(\d+)/)
  if (profileMatch) return profileMatch[1]
  return null
}

// Find user by ID64
function findUser(steamId64) {
  return USERS.find((u) => u.id === steamId64)
}

// Extract ID from HREF
function extractSteamIdFromHref(href) {
  if (!href) return null
  const match = href.match(/\/profiles\/(\d+)/)
  return match ? match[1] : null
}

// Create badge without tooltip
function createBadge(user, mini = false) {
  const badge = document.createElement("span")
  badge.className = mini ? "nevko-badge-mini" : "nevko-badge"
  badge.innerHTML = BADGE_ICONS[user.badge] || BADGE_ICONS.VK
  badge.dataset.description = user.description

  badge.addEventListener("mouseenter", () => showTooltip(badge, user.description))
  badge.addEventListener("mouseleave", hideTooltip)

  return badge
}

// Main logic

function init() {
  // Create global tooltip
  initTooltip()

  // Start adding all badges
  addAllBadges()

  // Observe for all dynamic changes
  observeChanges()
}

function addAllBadges() {
  addProfileBadge()
  addCommentBadges()
  addFriendBlockBadges()
  addSelectableOverlayBadges()
}

// 1. Badge on profile page (.actual_persona_name)
function addProfileBadge() {
  const steamId = getPageSteamId()
  if (!steamId) return

  const user = findUser(steamId)
  if (!user) return

  const nameElement = document.querySelector(".actual_persona_name")
  if (!nameElement || nameElement.querySelector(".nevko-badge")) return

  nameElement.appendChild(createBadge(user, false))
}

// 2. Mini-badge in comments (.commentthread_comment_author a)
function addCommentBadges() {
  const commentAuthors = document.querySelectorAll(".commentthread_comment_author a[data-miniprofile]")

  commentAuthors.forEach((link) => {
    if (link.querySelector(".nevko-badge-mini")) return

    const miniprofile = link.getAttribute("data-miniprofile")
    if (!miniprofile) return

    const steamId64 = steamId3ToSteamId64(miniprofile)
    const user = findUser(steamId64)

    if (user) {
      link.appendChild(createBadge(user, true))
    }
  })
}

// 3. Badges in friendBlockLinkOverlay -> friendBlockContent (nickname without class)
function addFriendBlockBadges() {
  const overlays = document.querySelectorAll(".friendBlockLinkOverlay")

  overlays.forEach((overlay) => {
    const href = overlay.getAttribute("href")
    const miniprofile = overlay.getAttribute("data-miniprofile")

    // Get SteamID
    let steamId64 = null
    if (miniprofile) {
      steamId64 = steamId3ToSteamId64(miniprofile)
    } else if (href) {
      steamId64 = extractSteamIdFromHref(href)
    }
    if (!steamId64) return

    const user = findUser(steamId64)
    if (!user) return

    // Searching friendBlockContent near
    const parent = overlay.closest(".friendBlock") || overlay.parentElement
    if (!parent) return

    const content = parent.querySelector(".friendBlockContent")
    if (!content || content.querySelector(".nevko-badge-mini")) return

    // Finding first element (nickname) inside friendBlockContent
    const textNodes = Array.from(content.childNodes).filter(
      (node) =>
        node.nodeType === Node.TEXT_NODE ||
        (node.nodeType === Node.ELEMENT_NODE && !node.classList.contains("nevko-badge-mini")),
    )

    // Adding badge near nickname
    if (textNodes.length > 0) {
      const lastTextNode = textNodes[0]
      if (lastTextNode.nodeType === Node.TEXT_NODE) {
        const wrapper = document.createElement("span")
        wrapper.textContent = lastTextNode.textContent
        wrapper.appendChild(createBadge(user, true))
        lastTextNode.replaceWith(wrapper)
      } else {
        lastTextNode.appendChild(createBadge(user, true))
      }
    } else {
      content.appendChild(createBadge(user, true))
    }
  })
}

// 4. Badges in selectable_overlay -> friend_block_content (nickname without class)
function addSelectableOverlayBadges() {
  const overlays = document.querySelectorAll(".selectable_overlay")

  overlays.forEach((overlay) => {
    const href = overlay.getAttribute("href")
    const miniprofile = overlay.getAttribute("data-miniprofile")

    // Получаем Steam ID
    let steamId64 = null
    if (miniprofile) {
      steamId64 = steamId3ToSteamId64(miniprofile)
    } else if (href) {
      steamId64 = extractSteamIdFromHref(href)
    }
    if (!steamId64) return

    const user = findUser(steamId64)
    if (!user) return

    // Searching friend_block_content near
    const parent = overlay.closest(".friend_block_v2") || overlay.closest(".persona") || overlay.parentElement
    if (!parent) return

    const content = parent.querySelector(".friend_block_content")
    if (!content || content.querySelector(".nevko-badge-mini")) return

    // Finding first element (nickname)
    const textNodes = Array.from(content.childNodes).filter(
      (node) =>
        node.nodeType === Node.TEXT_NODE ||
        (node.nodeType === Node.ELEMENT_NODE && !node.classList.contains("nevko-badge-mini")),
    )

    if (textNodes.length > 0) {
      const lastTextNode = textNodes[0]
      if (lastTextNode.nodeType === Node.TEXT_NODE) {
        const wrapper = document.createElement("span")
        wrapper.textContent = lastTextNode.textContent
        wrapper.appendChild(createBadge(user, true))
        lastTextNode.replaceWith(wrapper)
      } else {
        lastTextNode.appendChild(createBadge(user, true))
      }
    } else {
      content.appendChild(createBadge(user, true))
    }
  })
}

// Observe to all dynamic changes
function observeChanges() {
  const observer = new MutationObserver(() => {
    addCommentBadges()
    addFriendBlockBadges()
    addSelectableOverlayBadges()
  })

  observer.observe(document.body, { childList: true, subtree: true })
}

// Start
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init)
} else {
  init()
}

//       \    /\
//        )  ( ')
//       (  /  )
//       \(__)|