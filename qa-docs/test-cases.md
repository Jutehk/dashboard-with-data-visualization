# ✅ Test Cases – Mobile Dashboard (DashPro)

| TC ID | Test Scenario | Steps | Expected Result | Actual Result | Status | Defect ID |
|-------|---------------|-------|-----------------|---------------|--------|-----------|
| TC01 | Dashboard load time | Open dashboard on mobile with Wi-Fi | Loads in <3s | Yes, loads in 3s | Pass | - |
| TC02 | Responsive layout | Switch portrait → landscape | Layout adjusts, no overlap | Yes, adjusts well | Pass | - |
| TC03 | Filters update data | Apply filter (Time Range/Category/Status) | Data updates | Nothing happened after filtering | Fail | D01 |
| TC04 | Offline mode handling | Disable internet while on dashboard | Show “No Internet” message | Nothing until reopening app | Fail | D02 |
| TC05 | Device compatibility | Open dashboard on Android & iOS | Consistent layout & KPIs visible | Yes, works on both | Pass | - |
| TC06 | Sidebar navigation | Tap menu items | Opens correct section | Yes, opens with one tap | Pass | - |
| TC07 | 3G performance | Load dashboard under 3G | Loads in <5s | Yes, loads <5s | Pass | - |
| TC08 | Export report | Tap Export button | Download report (CSV/PDF) | Export did not generate report | Fail | D03 |
| TC09 | Search functionality | Type keyword in search bar | Dashboard filters results | Nothing happened | Fail | D04 |
| TC10 | Notifications | Tap bell icon | Display recent alerts | No response | Fail | D05 |
| TC11 | Monthly Revenue chart | View bar chart | Bars aligned, labels visible | Displays correctly | Pass | - |
| TC12 | Monthly Revenue details | Tap bar (e.g., May) | Show tooltip/details | Tooltip appears correctly | Pass | - |
| TC13 | Traffic Sources chart | View donut chart | Segments + % visible | Percentages display correctly | Pass | - |
| TC14 | Chart responsiveness | Scroll on mobile | Both charts visible without overlap | Yes, no overlap | Pass | - |
