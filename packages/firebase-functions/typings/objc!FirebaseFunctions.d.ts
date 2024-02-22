declare class FIRFunctions extends NSObject {
	static alloc(): FIRFunctions; // inherited from NSObject

	static functions(): FIRFunctions;

	static functionsForApp(app: FIRApp): FIRFunctions;

	static functionsForAppCustomDomain(app: FIRApp, customDomain: string): FIRFunctions;

	static functionsForAppRegion(app: FIRApp, region: string): FIRFunctions;

	static functionsForCustomDomain(customDomain: string): FIRFunctions;

	static functionsForRegion(region: string): FIRFunctions;

	static new(): FIRFunctions; // inherited from NSObject

	HTTPSCallableWithName(name: string): FIRHTTPSCallable;

	HTTPSCallableWithNameOptions(name: string, options: FIRHTTPSCallableOptions): FIRHTTPSCallable;

	HTTPSCallableWithURL(url: NSURL): FIRHTTPSCallable;

	HTTPSCallableWithURLOptions(url: NSURL, options: FIRHTTPSCallableOptions): FIRHTTPSCallable;

	useEmulatorWithHostPort(host: string, port: number): void;
}

declare const enum FIRFunctionsErrorCode {
	OK = 0,

	Cancelled = 1,

	Unknown = 2,

	InvalidArgument = 3,

	DeadlineExceeded = 4,

	NotFound = 5,

	AlreadyExists = 6,

	PermissionDenied = 7,

	ResourceExhausted = 8,

	FailedPrecondition = 9,

	Aborted = 10,

	OutOfRange = 11,

	Unimplemented = 12,

	Internal = 13,

	Unavailable = 14,

	DataLoss = 15,

	Unauthenticated = 16,
}

declare class FIRHTTPSCallable extends NSObject {
	static alloc(): FIRHTTPSCallable; // inherited from NSObject

	static new(): FIRHTTPSCallable; // inherited from NSObject

	timeoutInterval: number;

	callWithCompletion(completion: (p1: FIRHTTPSCallableResult, p2: NSError) => void): void;

	callWithObjectCompletion(data: any, completion: (p1: FIRHTTPSCallableResult, p2: NSError) => void): void;
}

declare class FIRHTTPSCallableOptions extends NSObject {
	static alloc(): FIRHTTPSCallableOptions; // inherited from NSObject

	static new(): FIRHTTPSCallableOptions; // inherited from NSObject

	readonly requireLimitedUseAppCheckTokens: boolean;

	constructor(o: { requireLimitedUseAppCheckTokens: boolean });

	initWithRequireLimitedUseAppCheckTokens(requireLimitedUseAppCheckTokens: boolean): this;
}

declare class FIRHTTPSCallableResult extends NSObject {
	static alloc(): FIRHTTPSCallableResult; // inherited from NSObject

	static new(): FIRHTTPSCallableResult; // inherited from NSObject

	readonly data: any;
}

declare var FirebaseFunctionsVersionNumber: number;

declare var FirebaseFunctionsVersionString: interop.Reference<number>;
