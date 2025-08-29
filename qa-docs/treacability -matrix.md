# Dashboard Visualization Traceability Matrix – Mobile App (Enhanced)

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

**Legend:**  
- **Req ID** → Requirement ID  
- **TC ID** → Test Case ID  
- **Defect ID** → Links to defect log (e.g., D-001 from your defect-log.md)  
- **Pending** → Test not yet executed
