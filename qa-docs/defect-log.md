# 🐞 Defect Log – DashPro Mobile Dashboard

## Summary
This log tracks all defects found during **manual & automated testing** of the DashPro mobile dashboard.  
Testing was performed across **Android (Pixel 6, Samsung Galaxy S22)** and **iOS (iPhone SE, iPhone 14)** under Wi-Fi & 3G network conditions.  

---

## Defect Table

| Defect ID | Module | Description | Steps to Reproduce | Expected Result | Actual Result | Severity | Priority | Status |
|-----------|--------|-------------|--------------------|----------------|---------------|----------|----------|--------|
| D01 | Filters | Filters (Time Range/Category/Status) do not update data | Apply any filter on dashboard | Data updates according to filter | No updates shown | High | High | Open |
| D02 | Offline Handling | No offline error displayed when internet disconnected | Disable internet while dashboard is open | “No Internet” message displayed immediately | Nothing happens until reopening app | High | High | Open |
| D03 | Export | Export button does not generate report | Tap Export button | Report (CSV/PDF) is generated | Nothing happens | Critical | High | Open |
| D04 | Search | Search bar does not filter results | Type keyword in search bar | Dashboard data filters accordingly | No response | High | Medium | Open |
| D05 | Notifications | Bell icon not responding | Tap notification bell | Recent alerts appear | No response | Medium | Medium | Open |

---

## Observations
- **Charts** (Monthly Revenue & Traffic Sources) passed functional and responsive checks.  
- **KPIs** displayed correctly on all tested devices.  
- **Performance** met requirements (loads <3s on Wi-Fi, <5s on 3G).  
- **Navigation** works as expected.  

---

## Next Steps
- Assign defects to development team for fixing.  
- Re-test Export, Filters, Search, Notifications, and Offline Mode after fixes.  
- Consider adding automated test scripts for filters & export to catch regressions early.  
