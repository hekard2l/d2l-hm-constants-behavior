'use strict';

const D2LHypermediaRels = {
	// default Brightspace domain rels
	assessment: 'https://api.brightspace.com/rels/assessment',
	assignment: 'https://api.brightspace.com/rels/assignment',
	color: 'https://api.brightspace.com/rels/color',
	content: 'https://api.brightspace.com/rels/content',
	courseOfferingInfoPage: 'https://api.brightspace.com/rels/course-offering-info-page',
	defaultSearch: 'https://api.brightspace.com/rels/default-search',
	departments: 'https://api.brightspace.com/rels/departments',
	displayName: 'https://api.brightspace.com/rels/display-name',
	enrollments: 'https://api.brightspace.com/rels/enrollments',
	firstName: 'https://api.brightspace.com/rels/first-name',
	lastName: 'https://api.brightspace.com/rels/last-name',
	myEnrollments: 'https://api.brightspace.com/rels/my-enrollments',
	myNotifications: 'https://notifications.api.brightspace.com/rels/my-notifications',
	myOrganizationGrades: 'https://api.brightspace.com/rels/my-organization-grades',
	myOrganizationAwards: 'https://api.brightspace.com/rels/my-organization-awards',
	userEnrollment: 'https://api.brightspace.com/rels/user-enrollment',
	organization: 'https://api.brightspace.com/rels/organization',
	organizationHomepage: 'https://api.brightspace.com/rels/organization-homepage',
	organizationImage: 'https://api.brightspace.com/rels/organization-image',
	organizations: 'https://api.brightspace.com/rels/organizations',
	parentSemester: 'https://api.brightspace.com/rels/parent-semester',
	profileImage: 'https://api.brightspace.com/rels/profile-image',
	quiz: 'https://api.brightspace.com/rels/quiz',
	role: 'https://api.brightspace.com/rels/role',
	root: 'https://api.brightspace.com/rels/root',
	richTextEditorConfig: 'https://api.brightspace.com/rels/richtext-editor-config',
	rubric: 'https://api.brightspace.com/rels/rubric',
	semesters: 'https://api.brightspace.com/rels/semesters',
	thumbnailRegular: 'https://api.brightspace.com/rels/thumbnail#regular',
	thumbnailSmall: 'https://api.brightspace.com/rels/thumbnail#small',
	userProfile: 'https://api.brightspace.com/rels/user-profile',
	user: 'https://api.brightspace.com/rels/user',
	users: 'https://api.brightspace.com/rels/users',
	whoami: 'https://api.brightspace.com/rels/whoami',
	widgetSettings: 'https://api.brightspace.com/rels/widget-settings',
	// Activities API sub-domain rels
	Activities: {
		myActivities: 'https://activities.api.brightspace.com/rels/my-activities',
		activityUsage: 'https://activities.api.brightspace.com/rels/activity-usage',
		myActivityUsage: 'https://activities.api.brightspace.com/rels/my-activity-usage',
		userActivityUsage: 'https://activities.api.brightspace.com/rels/user-activity-usage',
		overdue: 'https://activities.api.brightspace.com/rels/overdue',
		nextPeriod: 'https://activities.api.brightspace.com/rels/next-period',
		nextWeek: 'https://activities.api.brightspace.com/rels/next-week',
		previousPeriod: 'https://activities.api.brightspace.com/rels/previous-period',
		previousWeek: 'https://activities.api.brightspace.com/rels/previous-week',
		feedback: 'https://activities.api.brightspace.com/rels/feedback',
		activityGrade: 'https://activities.api.brightspace.com/rels/activity-grade'
	},
	// Assignments
	Assignments: {
		instructions: 'https://assignments.api.brightspace.com/rels/instructions',
		attachments: 'https://assignments.api.brightspace.com/rels/attachments'
	},
	// Awards
	Awards: {
		courseUserAvailableAwards: 'https://awards.api.brightspace.com/rels/course-user-available-awards',
		courseUserAwardedAwards: 'https://awards.api.brightspace.com/rels/course-user-awarded-awards',
		releaseConditions: 'https://awards.api.brightspace.com/rels/release-conditions',
		userAward: 'https://awards.api.brightspace.com/rels/user-award',
		userAwards: 'https://awards.api.brightspace.com/rels/user-awards'
	},
	Checklists: {
		checklist: 'https://checklists.api.brightspace.com/rels/checklist',
		checklistItem: 'https://checklists.api.brightspace.com/rels/checklist-item'
	},
	Content: {},
	// Parents API sub-domain rels
	Parents: {
		allChildren: 'https://parents.api.brightspace.com/rels/all-my-children'
	},
	// Discussions API sub-domain rels
	Discussions: {
		description: 'https://discussions.api.brightspace.com/rels/description',
		mySubscriptions: 'https://discussions.api.brightspace.com/rels/my-subscriptions',
		topic: 'https://discussions.api.brightspace.com/rels/topic'
	},
	// Folio API sub-domain rels
	Folio: {
		contentItem: 'https://folio.api.brightspace.com/rels/Content',
		commentList: 'https://folio.api.brightspace.com/rels/CommentList',
		evidence: 'https://folio.api.brightspace.com/rels/Evidence',
		folio: 'https://folio.api.brightspace.com/rels/folio',
		reflection: 'https://folio.api.brightspace.com/rels/Reflection',
		courseInfo: 'https://folio.api.brightspace.com/rels/CourseInfo',
		courseList: 'https://folio.api.brightspace.com/rels/CourseList'
	},
	// Grades API sub-domain rels
	Grades: {
		comment: 'https://grades.api.brightspace.com/rels/comment',
		comments: 'https://grades.api.brightspace.com/rels/comments',
		description: 'https://grades.api.brightspace.com/rels/description',
		grade: 'https://grades.api.brightspace.com/rels/grade',
		userGrade: 'https://grades.api.brightspace.com/rels/user-grade',
		weight: 'https://grades.api.brightspace.com/rels/weight'
	},
	// Quizzes API sub-domain rels
	Quizzes: {
		description: 'https://quizzes.api.brightspace.com/rels/description'
	},
	// Themes API sub-domain rels
	Themes: {
		theme: 'https://themes.api.brightspace.com/rels/theme',
		logo: 'https://themes.api.brightspace.com/rels/logo',
	},
	// Notifications API sub-domain rels
	Notifications: {
		settings: 'https://notifications.api.brightspace.com/rels/settings',
		subscriptions: 'https://notifications.api.brightspace.com/rels/subscriptions',
		digest: 'https://digest.api.brightspace.com/rels/digest',
		emailSettings: 'https://notifications.api.brightspace.com/rels/email-settings',
		smsSettings: 'https://notifications.api.brightspace.com/rels/sms-settings',
		gateways: 'https://notifications.api.brightspace.com/rels/gateways',
		gateway: 'https://notifications.api.brightspace.com/rels/gateway',
		organizationNotifications: 'https://notifications.api.brightspace.com/rels/organization-notifications',
		updates: 'https://notifications.api.brightspace.com/rels/updates',
		updatesSource: 'https://notifications.api.brightspace.com/rels/updates-source'
	},
	// Rubrics API sub-domain rels
	Rubrics: {
		criteria: 'https://rubrics.api.brightspace.com/rels/criteria',
		criteriaGroups: 'https://rubrics.api.brightspace.com/rels/criteria-groups',
		criterion: 'https://rubrics.api.brightspace.com/rels/criterion',
		criterionCell: 'https://rubrics.api.brightspace.com/rels/criterion-cell',
		level: 'https://rubrics.api.brightspace.com/rels/level',
		levels: 'https://rubrics.api.brightspace.com/rels/levels',
		overallLevel: 'https://rubrics.api.brightspace.com/rels/overall-level',
		overallLevels: 'https://rubrics.api.brightspace.com/rels/overall-levels'
	},
	Surveys: {
		survey: 'https://surveys.api.brightspace.com/rels/survey'
	},
	Alignments: {
		alignments: 'https://alignments.api.brightspace.com/rels/alignments'
	},
	Outcomes: {
		intents: 'https://outcomes.api.brightspace.com/rels/intents',
		intent: 'https://outcomes.api.brightspace.com/rels/intent',
		outcome: 'https://outcomes.api.brightspace.com/rels/outcome'
	}
};

const D2LHypermediaClasses = {
	activities: {
		complete: 'complete',
		exempt: 'exempt',
		feedbackDate: 'feedback-date',
		userAssignmentActivity: 'user-assignment-activity',
		userQuizActivity: 'user-quiz-activity',
		userContentActivity: 'user-content-activity',
		userDiscussionActivity: 'user-discussion-activity',
		userChecklistActivity: 'user-checklist-activity',
		userSurveyActivity: 'user-survey-activity'
	},
	assignments: {
		assignment: 'assignment',
		attachment: 'attachment',
		attachmentList: 'attachment-list',
		instructions: 'instructions',
		file: 'file',
		latest: 'latest',
		link: 'link',
		submissionComment: 'submission-comment',
		submissionDate: 'submission-date',
		submissionList: 'assignment-submission-list'
	},
	awards: {
		available: 'available',
		awarded: 'awarded',
		awardImage: 'award-image',
		badge: 'badge',
		certificate: 'certificate',
		releaseCondition: 'release-condition',
		releaseConditions: 'release-conditions',
		userAward: 'user-award',
		userAwards: 'user-awards'
	},
	content: {
		content: 'content',
		sequencedActivity: 'sequenced-activity',
		topic: 'topic',
		module: 'module'
	},
	courseImage: {
		courseImage: 'course-image',
		banner: 'banner',
		tile: 'tile',
		wide: 'wide',
		narrow: 'narrow',
		min: 'min',
		mid: 'mid',
		max: 'max',
		highDensity: 'high-density',
		lowDensity: 'low-density'
	},
	dates: {
		date: 'date',
		dueDate: 'due-date',
		endDate: 'end-date',
		issueDate: 'issue-date',
		startDate: 'start-date'
	},
	discussions: {
		discussion: 'discussion',
		topic: 'topic',
		description: 'description',
		unlocked: 'unlocked'
	},
	enrollments: {
		enrollment: 'enrollment',
		pinned: 'pinned',
		unpinned: 'unpinned'
	},
	grades: {
		comments: 'comments',
		description: 'description',
		final: 'final',
		grade: 'grade',
		userGrade: 'user-grade',
		userGrades: 'user-grades',
		weighted: 'weighted',
		points: 'points'
	},
	organizations: {
		courseOffering: 'course-offering'
	},
	quizzes: {
		quiz: 'quiz',
		description: 'description'
	},
	text: {
		richtext: 'richtext'
	},
	users: {
		profile: 'profile'
	},
	notifications: {
		subscription: {
			instant: 'instant',
			digest: 'digest',
			subscribed: 'subscribed',
			unsubscribed: 'unsubscribed',
			disabled: 'disabled'
		}
	},
	rubrics: {
		analytic: 'analytic',
		assessmentCriterionCell: 'assessment-criterion-cell',
		criterion: 'criterion',
		criterionCell: 'criterion-cell',
		criterionCellSelector: 'criterion-cell-selector',
		criteriaGroup: 'criteria-group',
		description: 'description',
		feedback: 'feedback',
		holistic: 'holistic',
		level: 'level',
		overallFeedback: 'overall-feedback',
		overallLevel: 'overall-level',
		overallLevelSelector: 'overall-level-selector',
		numeric: 'numeric',
		overridden: 'overridden',
		percentage: 'percentage',
		selected: 'selected'
	},
	alignments: {
		selected: 'selected'
	},
	outcomes: {
		intent: 'intent',
		intents: 'intents',
		intentList: 'intent-list',
		organizationIntentList: 'organization-intent-list',
		outcome: 'outcome',
		outcomes: 'outcomes',
		selected: 'selected',
		demonstratableLevel: 'demonstratable-level'
	}
};

const D2LHypermediaActions = {
	enrollments: {
		addDepartmentFilter: 'add-department-filter',
		addSemesterFilter: 'add-semester-filter',
		pinCourse: 'pin-course',
		removeDepartmentFilter: 'remove-department-filter',
		removeSemesterFilter: 'remove-semester-filter',
		searchMyEnrollments: 'search-my-enrollments',
		searchMyDepartments: 'search-my-departments',
		searchMySemesters: 'search-my-semesters',
		setRoleFilters: 'set-role-filters',
		unpinCourse: 'unpin-course',
		roleFilters: {
			addFilter: 'add-filter',
			applyRoleFilters: 'apply-role-filters',
			clearRoleFilters: 'clear-role-filters',
			removeFilter: 'remove-filter'
		}
	},
	organizations: {
		removeHomepageBanner: 'remove-homepage-banner',
		setCatalogImage: 'set-catalog-image'
	},
	activities: {
		selectCustomDateRange: 'select-custom-date-range'
	},
	assignments: {
		delete: 'delete'
	},
	notifications: {
		getCarrierClass: 'get-carrier',
		settings: {
			update: 'update'
		},
		emailSettings: {
			update: 'update',
			delete: 'delete'
		},
		smsSettings: {
			create: 'create',
			update: 'update',
			delete: 'delete',
			verify: 'verify'
		},
		gateways: {
			search: 'search'
		},
		gateway: {
			updateNumber: 'update-number'
		},
		subscription: {
			subscribe: 'subscribe',
			unsubscribe: 'unsubscribe',
			update: 'update'
		}
	},
	digest: {
		subscribeToParentNotifications: 'subscribe-to-parent-notifications',
		skipSubscribeToParentNotifications: 'skip-subscribe-to-parent-notifications',
		unsubscribeToParentNotifications: 'unsubscribe-to-parent-notifications'
	},
	rubrics: {
		selectCriterionCell: 'select-criterion-cell'
	},
	alignments: {
		removeAlignment: 'remove-alignment',
		startUpdateAlignments: 'start-update-alignments',
		select: 'select',
		deselect: 'deselect',
		submit: 'submit'
	},
	outcomes: {
		select: 'select'
	}
};

if (typeof module !== 'undefined') {
	module.exports = {
		Actions: D2LHypermediaActions,
		Classes: D2LHypermediaClasses,
		Rels: D2LHypermediaRels
	}
}
