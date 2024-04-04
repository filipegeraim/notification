/*
  Warnings:

  - The primary key for the `NotificationHistory` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `channel` to the `NotificationHistory` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_NotificationHistory" (
    "channel" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "notificationId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("channel", "userId", "notificationId"),
    CONSTRAINT "NotificationHistory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "NotificationHistory_notificationId_fkey" FOREIGN KEY ("notificationId") REFERENCES "Notification" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
DROP TABLE "NotificationHistory";
ALTER TABLE "new_NotificationHistory" RENAME TO "NotificationHistory";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
