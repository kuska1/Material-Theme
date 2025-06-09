// Original code from NEVKO-UI
// https://github.com/dotFelixan/NEVKO-UI

const userIconsData = [
  {
    "steamid": "76561198878285454",
    "customurl": "flowird",
    "badge": "dev",
    "description": "Material Theme Dev"
  },
  {
    "steamid": "76561198343678851",
    "customurl": "NeoNyaa",
    "badge": "dev",
    "description": "Material Theme Contributor"
  }
];

const badgeData = {
  "dev":  `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21 12c0-2.03-.67-3.91-2-5.62v11.25c1.33-1.66 2-3.54 2-5.63m-3.37 7H6.38c.68.55 1.57 1 2.67 1.41c1.09.39 2.08.59 2.95.59c.88 0 1.86-.2 2.95-.59c1.1-.41 1.99-.86 2.68-1.41M11 17L7 9v8zm6-8l-4 8h4zm-5 5.53L15.75 7h-7.5zM17.63 5C15.97 3.67 14.09 3 12 3s-3.97.67-5.62 2zM5 17.63V6.38C3.67 8.09 3 9.97 3 12c0 2.09.67 3.97 2 5.63M23 12c0 3.03-1.06 5.63-3.22 7.78C17.63 21.94 15.03 23 12 23s-5.62-1.06-7.78-3.22C2.06 17.63 1 15.03 1 12s1.06-5.62 3.22-7.78S8.97 1 12 1s5.63 1.06 7.78 3.22C21.94 6.38 23 8.97 23 12"/></svg>`
};

function log(message) {
  console.log("%c Material %cSUI ", "background: rgb(65 95 145); color: white", "background: rgb(65 95 145); color: rgb(170 199 255)", message)
  // console.log(`[Steam User Icon] ${message}`);
}

// Add CSS for the tooltip
function addTooltipStyles() {
  // Check if styles already exist
  if (document.getElementById('nevko_tooltip_styles')) {
    return;
  }
  
  // Create style element
  const style = document.createElement('style');
  style.id = 'nevko_tooltip_styles';
  // Add to document
  document.head.appendChild(style);
}

// Function to check if a URL matches a user
function matchesUser(url) {
  if (!url) return null;
  
  const lowerUrl = url.toLowerCase();
  
  for (const userData of userIconsData) {
    if (userData.steamid && lowerUrl.includes(`/profiles/${userData.steamid}`)) {
      log(`Identifier found: ${userData.steamid}`);
      return userData;
    }
    
    if (userData.customurl && lowerUrl.includes(`/id/${userData.customurl.toLowerCase()}`)) {
      log(`Identifier found: ${userData.customurl}`);
      return userData;
    }
  }
  
  return null;
}

// Function to create and show tooltip
function showTooltip(event, description) {
  // Remove any existing tooltips
  hideAllTooltips();
  
  // Create tooltip element
  const tooltip = document.createElement('div');
  tooltip.className = 'nevko_tooltip';
  tooltip.textContent = description;
  
  // Add to document
  document.body.appendChild(tooltip);
  
  // Position tooltip above the badge
  const rect = event.target.getBoundingClientRect();
  tooltip.style.left = (rect.left + rect.width / 2 - tooltip.offsetWidth / 2) + 'px';
  tooltip.style.top = (rect.top + tooltip.offsetHeight + window.scrollY) + 'px';
  
  // Show tooltip
  setTimeout(() => {
    tooltip.style.opacity = '1';
  }, 10);
  // log(`Show tooltip...`);
}

// Function to hide all tooltips
function hideAllTooltips() {
  const tooltips = document.querySelectorAll('.nevko_tooltip');
  tooltips.forEach(tooltip => {
    // log(`Removing tooltip: ${tooltip}`);
    tooltip.remove();
  });
}

// Function to add badges to username elements
function addBadges() {
  // Remove any existing badges first (only once at startup)
  document.querySelectorAll('.badge_nevko_user').forEach(badge => {
    // log(`Removing badge: ${badge}`);
    badge.remove();
  });
  
  // Find all username elements
  const usernameElements = document.querySelectorAll('.actual_persona_name');
  
  // Process each username
  usernameElements.forEach(username => {
    // Skip if already has a badge
    if (username.nextElementSibling && username.nextElementSibling.classList.contains('badge_nevko_user')) {
      return;
    }
    
    // Find the closest link
    let link = null;
    let parent = username.parentElement;
    
    // Look up to 3 levels for a link
    for (let i = 0; i < 3; i++) {
      if (!parent) break;
      
      const links = parent.querySelectorAll('a');
      if (links.length > 0) {
        link = links[0];
        break;
      }
      
      parent = parent.parentElement;
    }
    
    // Check if we found a link and if it matches a user
    if (link) {
      const userData = matchesUser(link.href);
      
      if (userData) {
        // Create the badge
        const badge = document.createElement('span');
        badge.classList.add('badge_nevko_user');
        // badge.innerHTML = userData.badge;
        if (userData.badge in badgeData) {
          badge.innerHTML = badgeData[userData.badge];
        } else {
          badge.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#fff" d="M12 17q.425 0 .713-.288T13 16t-.288-.712T12 15t-.712.288T11 16t.288.713T12 17m-1-4h2V7h-2zm1 9q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"/></svg>`;
        }
        badge.dataset.description = userData.description || '';
        
        // Style the badge
        badge.style.display = 'inline-block';
        badge.style.verticalAlign = 'middle';
        badge.style.marginLeft = '5px';
        badge.style.marginBottom = '11px';
        badge.style.width = '24px';
        badge.style.height = '24px';
        
        // Add tooltip events
        badge.addEventListener('mouseenter', function(e) {
          showTooltip(e, this.dataset.description);
        });
        
        badge.addEventListener('mouseleave', function() {
          hideAllTooltips();
        });
        
        // Add the badge after the username
        username.parentNode.insertBefore(badge, username.nextSibling);
      }
    }
  });
}

// Function to add mini badges to comment author links
function addMiniBadges() {
  // Remove any existing mini badges first
  document.querySelectorAll('.minibadge_nevko_user').forEach(badge => {
    badge.remove();
  });
  
  // Find all comment author links
  const authorLinks = document.querySelectorAll('.hoverunderline.commentthread_author_link');
  
  // Process each author link
  authorLinks.forEach(link => {
    // Skip if already has a badge
    if (link.nextElementSibling && link.nextElementSibling.classList.contains('minibadge_nevko_user')) {
      return;
    }
    
    // Check if this link matches a user
    const userData = matchesUser(link.href);
    
    if (userData) {
      // Create the mini badge
      const miniBadge = document.createElement('span');
      miniBadge.classList.add('minibadge_nevko_user');
      // miniBadge.innerHTML = userData.badge;
      if (userData.badge in badgeData) {
        miniBadge.innerHTML = badgeData[userData.badge];
      } else {
        miniBadge.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#fff" d="M12 17q.425 0 .713-.288T13 16t-.288-.712T12 15t-.712.288T11 16t.288.713T12 17m-1-4h2V7h-2zm1 9q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"/></svg>`;
      }
      miniBadge.dataset.description = userData.description || '';
      
      // Style the mini badge
      miniBadge.style.display = 'inline-block';
      miniBadge.style.verticalAlign = 'middle';
      miniBadge.style.marginLeft = '3px';
      miniBadge.style.marginTop = '-5px';
      miniBadge.style.width = '16px';
      miniBadge.style.height = '16px';
      miniBadge.style.scale = '0.7';
      
      // Add tooltip events
      miniBadge.addEventListener('mouseenter', function(e) {
        showTooltip(e, this.dataset.description);
      });
      
      miniBadge.addEventListener('mouseleave', function() {
        hideAllTooltips();
      });
      
      // Add the mini badge after the author link
      link.parentNode.insertBefore(miniBadge, link.nextSibling);
    }
  });
}

// Check if we're on a profile page
function checkProfilePage() {
  const url = window.location.href;
  const userData = matchesUser(url);
  
  if (userData) {
    // Find the main username on the profile page
    const usernameElements = document.querySelectorAll('.actual_persona_name');
    
    if (usernameElements.length > 0) {
      const mainUsername = usernameElements[0];
      
      // Check if it already has a badge
      if (mainUsername.nextElementSibling && mainUsername.nextElementSibling.classList.contains('badge_nevko_user')) {
        return;
      }
      
      // Create the badge
      const badge = document.createElement('span');
      badge.classList.add('badge_nevko_user');
      // badge.innerHTML = userData.badge;
      if (userData.badge in badgeData) {
        badge.innerHTML = badgeData[userData.badge];
      } else {
        badge.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#fff" d="M12 17q.425 0 .713-.288T13 16t-.288-.712T12 15t-.712.288T11 16t.288.713T12 17m-1-4h2V7h-2zm1 9q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"/></svg>`;
      }
      badge.dataset.description = userData.description || '';
      
      // Style the badge
      badge.style.display = 'inline-block';
      badge.style.verticalAlign = 'middle';
      badge.style.marginLeft = '5px';
      badge.style.marginBottom = '11px';
      badge.style.width = '24px';
      badge.style.height = '24px';
      
      // Add tooltip events
      badge.addEventListener('mouseenter', function(e) {
        showTooltip(e, this.dataset.description);
      });
      
      badge.addEventListener('mouseleave', function() {
        hideAllTooltips();
      });
      
      // Add the badge after the username
      mainUsername.parentNode.insertBefore(badge, mainUsername.nextSibling);
    }
  }
}

// Function to process all badges
function processAllBadges() {
  addTooltipStyles();
  addBadges();
  addMiniBadges();
  checkProfilePage();
}

// Initialize when the DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function() {
    // Initial run
    processAllBadges();
    
    // Set up a simple observer for new content
    const observer = new MutationObserver(function(mutations) {
      // Only process if new nodes were added
      for (const mutation of mutations) {
        if (mutation.addedNodes.length > 0) {
          // Check if any of the added nodes contain usernames or author links
          for (const node of mutation.addedNodes) {
            if (node.nodeType === 1) { // Element node
              if ((node.classList && (node.classList.contains('actual_persona_name') || 
                                     node.classList.contains('commentthread_author_link'))) ||
                  (node.querySelector && (node.querySelector('.actual_persona_name') || 
                                         node.querySelector('.commentthread_author_link')))) {
                // If the added node is or contains relevant elements, process them
                processAllBadges();
                return;
              }
            }
          }
        }
      }
    });
    
    // Start observing with a more targeted approach
    observer.observe(document.body, { 
      childList: true, 
      subtree: true,
      attributes: false,
      characterData: false
    });
    
    // Add document-wide mouseleave handler to ensure tooltips are removed
    document.addEventListener('mouseleave', hideAllTooltips);
  });
} else {
  // DOM already loaded
  processAllBadges();
  
  // Set up a simple observer for new content
  const observer = new MutationObserver(function(mutations) {
    // Only process if new nodes were added
    for (const mutation of mutations) {
      if (mutation.addedNodes.length > 0) {
        // Check if any of the added nodes contain usernames or author links
        for (const node of mutation.addedNodes) {
          if (node.nodeType === 1) { // Element node
            if ((node.classList && (node.classList.contains('actual_persona_name') || 
                                   node.classList.contains('commentthread_author_link'))) ||
                (node.querySelector && (node.querySelector('.actual_persona_name') || 
                                       node.querySelector('.commentthread_author_link')))) {
              // If the added node is or contains relevant elements, process them
              processAllBadges();
              return;
            }
          }
        }
      }
    }
  });
  
  // Start observing with a more targeted approach
  observer.observe(document.body, { 
    childList: true, 
    subtree: true,
    attributes: false,
    characterData: false
  });
  
  // Add document-wide mouseleave handler to ensure tooltips are removed
  document.addEventListener('mouseleave', hideAllTooltips);
}
