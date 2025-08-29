#### link: https://dashvisualize.netlify.app/
# Dashboard Visualization Mobile App – QA Project

## Project Overview
This project focuses on **Quality Assurance (QA) testing** of the **Dashboard Visualization** in a mobile app.  
The dashboard displays key metrics and data visualizations, supports filtering, and must perform smoothly across devices, screen sizes, and connectivity conditions.

**Objectives:**
- Ensure dashboard loads quickly (< 3s)
- Verify responsiveness across devices
- Validate filtering and data visualization accuracy
- Confirm offline handling and error management
- Provide a user-friendly interface

---

##  Testing Approach
The QA process followed standard **STLC practices**, including:
1. **Requirements Analysis** – Identify functional and non-functional requirements.
2. **Test Planning** – Define scope, tools, environment, and deliverables.
3. **Test Case Design** – Map requirements to detailed test cases.
4. **Test Execution** – Perform manual and automated testing on multiple devices.
5. **Defect Logging & Reporting** – Track bugs using unique IDs.
6. **Traceability** – Link requirements → test cases → defects for full coverage.

**Tools Used:**
- Manual Testing: Device simulators, real devices
- Automated Testing: [Optional if using Appium or Selenium Mobile]
- Performance & Responsiveness: Stopwatch, Chrome DevTools (for hybrid apps)
- Documentation: Markdown, Excel/Sheets for logs

---

## Traceability Matrix

See [Traceability Matrix](traceability-matrix.md) for full mapping of requirements → test cases → defects.

| **Req ID** | **Requirement Description** | **Test Case ID** | **Test Case Description** | **Test Status** | **Defect ID** | **Comments / Notes** |
|------------|----------------------------|----------------|--------------------------|----------------|---------------|--------------------|
| R-001 | Dashboard loads within 3 seconds | TC-001 | Verify dashboard loading time ≤ 3s | Passed | – | Performance acceptable |
| R-002 | Dashboard adjusts to different screen sizes without breaking | TC-002 | Test dashboard responsiveness on multiple devices | Passed | – | Works on all tested devices |
| R-003 | Filtering on dashboard functions correctly | TC-003 | Apply filters and verify results update | Failed | D-001 | Nothing happens after filtering; defect logged |
| R-004 | Offline behavior handling | TC-004 | Disable internet and interact with dashboard | Passed | – | Displays correctly after reopening app |
| R-005 | Device compatibility | TC-005 | Test app on multiple device types | Passed | – | Compatible with all tested devices |
| R-006 | Menu accessibility | TC-006 | Open menu with a single tap | Passed | – | Smooth navigation |
| R-007 | Data visualization accuracy | TC-007 | Verify charts display correct data | Pending | D-002 | Needs validation with sample dataset; potential defect |
| R-008 | User-friendly interface | TC-008 | Check layout, font size, and touch targets | Passed | – | No major UX issues |
| R-009 | Error handling | TC-009 | Trigger invalid actions and check responses | Pending | D-003 | To be tested after backend integration |

---

##  Defect Log
Defects are tracked using unique IDs (e.g., **D-001**) and include severity, priority, and status. Refer to `defect-log.md` for full details.

---

## 📂 File Structure
