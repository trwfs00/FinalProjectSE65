package orm

import (
	"time"

	"gorm.io/gorm" //framework ต่อกับ database ภาษา Go
)

type Booking struct { //สร้างตารางใน database ชื่อ Booking
	gorm.Model
	UserID string
	CarID  string
	Start  time.Time
	End    time.Time
}
